import {
  AfterContentInit,
  AfterViewInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  @Input({ required: true }) lable!: string;

  private el = inject(ElementRef);
  //@ContentChild('input') private control?: ElementRef<
  //  HTMLInputElement | HTMLTextAreaElement
  //>;
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  ngAfterContentInit() {
    console.log('After Content Init');
  }

  onClick() {
    console.log(this.el);
    console.log(this.control());
  }
}
