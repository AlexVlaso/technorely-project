import { StorageElement } from '../../enum/storage-element.enum';
import { HttpOptions, ResponseError } from '../../types/types';

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

    const validResponse = await this.checkResponse(response);

    return (await validResponse.json()) as Promise<T>;
  }

  private getFullPath(path: string) {
    return `${this.baseUrl}/${path}`;
  }

  private getHeaders(hasAuth: boolean) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    if (hasAuth) {
      headers.append(
        'authorization',
        `Bearer ${localStorage.getItem(StorageElement.TOKEN) ?? ''}`,
      );
    }
    return headers;
  }

  private async checkResponse(response: Response) {
    if (!response.ok) {
      const body = (await response.json()) as ResponseError;
      throw new Error(body.message);
    }
    return response;
  }
}

export { HttpApi };
