import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class LanguageService {
    private lang: string;
    private subject = new Subject<string>();
    private observable: Observable<any>;

    public setLang(lang: string) {
        this.subject.next(lang);
    }

    public clearLang() {
        this.subject.next();
    }

    public getLang(): Observable<string> {
        if (this.lang) {
            return Observable.of(this.lang);
        } else if (this.observable) {
            return this.observable;
        } else {
            this.observable = this.getLanguage()
                .map(response => {
                    this.observable = null;
                    this.lang = response;
                    return this.lang;
                })
                .share();
            return this.observable;
        }
    }

    private getLanguage(): Observable<string> {
        return this.subject.asObservable();
    }
}
