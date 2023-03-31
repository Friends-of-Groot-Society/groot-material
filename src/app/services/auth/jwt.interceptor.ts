import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminAuthenticationService } from  './admin-authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private adminAuthService: AdminAuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt idToken if available
        let currentUser = this.adminAuthService.getAuthenticatedUser;
        // if (currentUser && currentUser.token) {
        //     request = request.clone({
        //         setHeaders: { 
        //             Authorization: `Bearer ${currentUser.idToken}`
        //         }
        //     });
        // }

        return next.handle(request);
    }
}