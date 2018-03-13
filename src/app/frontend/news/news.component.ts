import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LanguageService } from '../../shared';
import { Observable } from 'rxjs/Observable';
import {
    ActivatedRoute,
    Params,
    Router,
    ActivationStart,
    NavigationEnd
} from '@angular/router';
import {
    map,
    filter,
    switchMap,
    distinctUntilChanged,
    take
} from 'rxjs/operators';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    public language: Observable<string>;

    private subscription: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.language = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute.parent.parent),
            distinctUntilChanged(),
            switchMap(a => a.paramMap),
            map(params => params.get('language'))
        );
    }
}
