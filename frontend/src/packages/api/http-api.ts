import { HttpOptions } from '../../lib/types/types';

class HttpApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async load<T>(path: string, options: HttpOptions) {
    const { hasAuth, method, payload = null } = options;
    const response = await fetch(this.getFullPath(path), {
      method,
      body: payload,
      headers: this.getHeaders(hasAuth),
    });

    return this.checkResponse(response).json() as Promise<T>;
  }

  private getFullPath(path: string) {
    return this.baseUrl + path;
  }

  private getHeaders(hasAuth: boolean) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    if (hasAuth) {
      headers.append(
        'authorization',
        `Bearer ${localStorage.getItem('token') ?? ''}`,
      );
    }
    return headers;
  }

  private checkResponse(response: Response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }
}

export { HttpApi };
