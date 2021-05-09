import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-analitics-select',
  templateUrl: './analitics-select.component.html',
  styleUrls: ['./analitics-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnaliticsSelectComponent implements OnInit {
  panelColor = new FormControl('red');

  constructor() { }

  ngOnInit(): void {
  }

}
