import { fetcher } from 'core/fetcher/fetcher';

export function vimeoFetchInstance<T>(
  url: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  return fetcher(`https://api.vimeo.com/users/156109927${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: 'bearer 12330185b7f62db478a8c0dff05725c9',
    },
  });
}
