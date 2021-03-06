import { InjectionToken, Provider } from '@angular/core';

export const API_URL_TOKEN=new InjectionToken("API_URL");
export const MY_SERVICE=new InjectionToken("MY_SERVICE")

export const apiURLProvider:Provider={
    provide:API_URL_TOKEN,
    useValue:'http://localhost4000/api'
}
export class MyService{
value=123;
}
export const myServiceProvider:Provider={
    provide: MY_SERVICE,
    useClass: MyService
}