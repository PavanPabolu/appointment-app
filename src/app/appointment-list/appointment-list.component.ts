import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core'; //life-cycle hook


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  
  //for two-way data binding
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();


  // appointment: string = "Take dog for walk"
  appointment: Appointment = {
    id:1,
    title:"Take a dog for a walk",
    date: new  Date('2024-09-18')
  }

  appointments: Appointment[] = []

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("got Loaded!");

    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ?  JSON.parse(savedAppointments) : [];
  }
  

  addAppointment() : void {
    //alert(this.newAppointmentTitle + "  " + this.newAppointmentDate);
    
    //to verify the data,
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        // id: this.appointments.length + 1,
        id: Date.now(), //in milli seconds
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments',JSON.stringify(this.appointments));

      //alert(this.appointments.length);
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments',JSON.stringify(this.appointments));
  }

}
