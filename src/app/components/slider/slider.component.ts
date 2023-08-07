import { Component, Input, OnInit } from '@angular/core';
import { Contents } from 'src/app/models/contents.models';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() slides?: Contents['list'];
  constructor() { }

  ngOnInit() {}

}
