export const fetcher = async <T>(
  url: RequestInfo,
  init?: RequestInit,
): Promise<T> => {
  const requestInit: RequestInit = {
    method: init?.method ?? 'GET',
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    cache: 'no-store',
    ...init,
  };

  const response = await fetch(url, requestInit);
  const { status, ok } = response;
  // TODO make error handling with notifications or with console messages

  if (!ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await response.json();
    error.status = status;

    console.error(
      error?.info?.systemError ? error.info.systemError : error?.info?.status,
    );

    throw error;
  }

  return response.json();
};
