import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  
  // appointment: string = "Take dog for walk"
  appointment: Appointment = {
    id:1,
    title:"Take a dog for a walk",
    date: new  Date('2024-09-18')
  }


}
