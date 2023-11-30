export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof localStorage !== 'undefined') {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      return navigateTo('/login');
    }
  }
});