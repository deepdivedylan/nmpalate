import {Component, OnInit} from "@angular/core";
import {OnActivate, RouteSegment, Router} from '@angular/router';
import {ChileService} from "../services/chile.service";
import {Chile} from "../classes/chile";

@Component({
    templateUrl: "app/templates/chile-detail.html",
    providers: [ChileService]
})

export class ChileDetailComponent implements OnInit {
    constructor(private chileService: ChileService, private router: Router) {}

    chile: Chile;
    chileId: number;
    errorMessage: string;

    chileName: string;
    chileImageUrl: string;
    chileDescription: string;

    routerOnActivate(curr: RouteSegment) {
        this.chileId = Number(curr.getParam("id"));
    }

    ngOnInit() {
        this.getChileById();
    }

    getChileById() {
        this.chileService.getChile()
            .subscribe(
                chile => {
                    this.chile = chile.filter(result => result.id == +this.chileId)[0];
                    this.chileName = this.chile.name;
                    this.chileImageUrl = this.chile.imageUrl;
                    this.chileDescription = this.chile.description;
                },
                error => this.errorMessage = error
            );
    }
}
