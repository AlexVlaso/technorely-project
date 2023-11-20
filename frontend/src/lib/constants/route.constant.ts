const AppRoute = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  COMPANIES: '/companies',
  COMPANY_DETAILS: '/companies/:id',
} as const;

export { AppRoute };
