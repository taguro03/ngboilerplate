import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RequestService { 
    private main = "http://localhost/api";
    private http: HttpClient = inject(HttpClient);

    public request(api: string, params: string, load: any, sw: number) {
        return this.http.post(this.main+api+params, JSON.stringify(load));
    }
}