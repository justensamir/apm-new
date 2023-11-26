import { CanActivateFn } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  
  return (isNaN(id) || id < 1)? false : true;
};

