import { AuthApi } from './auth-api';

const authApi = new AuthApi(import.meta.env.VITE_API_SERVER_URL);

export { authApi };
