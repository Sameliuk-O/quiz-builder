const BASE_URL = import.meta.env.VITE_PUBLIC_APP_BASE_API_URL || 'http://localhost:3000';

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP error! status: ${res.status}, message: ${text}`);
  }

  return res.json() as Promise<T>;
}
