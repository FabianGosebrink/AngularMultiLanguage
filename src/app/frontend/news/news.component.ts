import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
    LanguageService,
} from '../../shared';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
    public language: string;
    private subscription: Subscription;

    constructor(private languageService: LanguageService) { }

    ngOnInit() {
        console.log('news ngOnInit');
        this.subscription = this.languageService.getLang().subscribe(lang => {
            this.language = lang;
            console.log(this.language);
        });
    }

    ngOnDestroy() {
        console.log('news ngOnDestroy');
        // this.subscription.unsubscribe();
    }
}
