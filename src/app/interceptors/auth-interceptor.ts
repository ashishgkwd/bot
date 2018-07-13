import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req:HttpRequest<any>, next:HttpHandler) {
        if(req.method === 'GET'){
            return next.handle(req);
        }
        else{
            const authReq = req.clone({
                headers: req.headers.set('auth-token', 'abc987654321')
            })
            return next.handle(authReq);
        }
    }
}