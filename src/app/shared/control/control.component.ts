import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  @Input()
  label = 'Control';
}
