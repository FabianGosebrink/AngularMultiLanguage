import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LanguageService } from '../../shared';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public language: Observable<string>;

    private subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.language = this.activatedRoute.parent.paramMap.pipe(
            map((params: Params) => params.get('language'))
        );
    }
}
