const AppRoute = {
  ROOT: '/',
  SIGN_IN: '/login',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  COMPANIES: '/companies',
  COMPANY_DETAILS: '/companies/:id',
} as const;

export { AppRoute };
