import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class DummyService {

    constructor(private http: HttpClient) {

    }

    getData() {
        return this.http.get<DummyResponse>('http://localhost:8080/greeting');
    }

}
interface DummyResponse {
    id: string;
    content: string;
}