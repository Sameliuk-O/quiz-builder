import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateQuizDto) {
    return this.prisma.quiz.create({
      data: {
        title: dto.title,
        questions: {
          create: dto.questions.map((q) => ({
            text: q.text,
            type: q.type,
            options: q.options ? { create: q.options } : undefined,
          })),
        },
      },
      include: { questions: { include: { options: true } } },
    });
  }

  async findAll() {
    const quizzes = await this.prisma.quiz.findMany({
      include: { questions: true },
      orderBy: { id: 'asc' },
    });

    return quizzes.map((q) => ({
      id: q.id,
      title: q.title,
      questionCount: q.questions.length,
    }));
  }

  async findOne(id: number) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id },
      include: { questions: { include: { options: true } } },
    });

    if (!quiz) throw new NotFoundException('Quiz not found');
    return quiz;
  }

  async remove(id: number) {
    const questions = await this.prisma.question.findMany({
      where: { quizId: id },
      select: { id: true },
    });

    const questionIds = questions.map((q) => q.id);
    if (questionIds.length > 0) {
      await this.prisma.option.deleteMany({
        where: { questionId: { in: questionIds } },
      });
    }

    await this.prisma.question.deleteMany({
      where: { quizId: id },
    });

    await this.prisma.quiz.delete({ where: { id } });

    return { message: 'Quiz deleted successfully' };
  }
}
