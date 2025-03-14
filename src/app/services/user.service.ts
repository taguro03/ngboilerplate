import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLoggedIn() {
      throw new Error('Method not implemented.');
    }
    public sample: string = 'this is a test';
}