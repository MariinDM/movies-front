import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const jwtTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const accessToken = environment.accessToken;

  if (accessToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
