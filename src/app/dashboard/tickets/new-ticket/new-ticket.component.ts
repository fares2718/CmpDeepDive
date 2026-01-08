import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; request: string }>();

  ngOnInit() {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, request: string) {
    this.add.emit({
      title: title,
      request: request,
    });
    this.form?.nativeElement.reset();
  }
}
