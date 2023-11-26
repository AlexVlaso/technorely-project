type HttpOptions = {
  hasAuth: boolean;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  payload: BodyInit | null;
};

export { type HttpOptions };
