import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  close = output();
  detailsVisable = signal<boolean>(false);

  onToggleDetails() {
    this.detailsVisable.set(!this.detailsVisable());
  }

  onCloseTicket() {
    this.close.emit();
  }
}
