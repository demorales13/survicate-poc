import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service';
import { ISurvey } from './survey.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subscriptions = new Subject();
  survey : ISurvey;
  showSpinner = false;

  constructor(private service: SurveyService) {}

  ngOnInit() {
    this.getSurvey();
  }

  ionViewDidLeave(): void {
    this.survey = null;
    this.subscriptions.next();
    this.subscriptions.complete();
  }

  async getSurvey() {
    this.showSpinner = true;

    this.service.get()
      .pipe(takeUntil(this.subscriptions))
      .subscribe(
        (response: ISurvey) => {
          this.showSpinner = false;
          this.survey = response;
        }
      );
  }

}
