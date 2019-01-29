import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {
  choice;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.choice = this.route.snapshot.paramMap.get('choice');
  }

}
