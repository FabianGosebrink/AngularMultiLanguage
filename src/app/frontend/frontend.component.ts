import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

import {
    LanguageService,
} from '../shared';

@Component({
    selector: 'app-frontend',
    templateUrl: './frontend.component.html',
    styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
    public language: string;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private languageService: LanguageService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.language = params['language'];
            this.languageService.setLang(this.language);
        });

        if (!this.language) {
            this.language = 'de';
            this.languageService.setLang(this.language);
        }
    }

    public changeLanguage(newLang: string) {
        const periodArray = [];
        const segments = this.router.parseUrl(this.router.url).root.children[
            'primary'
        ].segments;
        for (const segment of segments) {
            if (segment.path === this.language) {
                periodArray.push(newLang);
            } else {
                periodArray.push(segment.path);
            }
        }

        this.language = newLang;
        this.languageService.setLang(this.language);

        this.router.navigate(periodArray);
    }
}
