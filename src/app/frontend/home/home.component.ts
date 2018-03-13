import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
    LanguageService
} from '../../shared';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    public language: string;

    private subscription: Subscription;

    constructor(private languageService: LanguageService) { }

    ngOnInit() {
        console.log('home ngOnInit');
        this.subscription = this.languageService.getLang().subscribe(lang => {
            console.log(lang);
            this.language = lang;
            console.log(this.language);
        });
    }

    ngOnDestroy() {
        console.log('home ngOnDestroy');
        // this.subscription.unsubscribe();
    }
}
