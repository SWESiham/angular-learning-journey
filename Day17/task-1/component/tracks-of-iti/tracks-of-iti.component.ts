import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from "../../interface/location";
import { IUser } from "../../interface/iuser";
@Component({
  selector: 'app-tracks-of-iti',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tracks-of-iti.component.html',
  styleUrl: './tracks-of-iti.component.css'
})
export class TracksOfITIComponent {
  selectedTrack = "";
  trackErrorMsg = "";
  nameErrorMsg = "";
  ageErrorMsg = "";
  userName: string = "";
  userAge: number | null = null;
  users: IUser[] = this.loadfromlocal();
  loc: Location[] = [
    {track : 'Testing' , location : ['Benha','menfya']},
    {track : '.Net' , location : ['Benha','menfya','smart']},
    {track : 'Mearn' , location : ['Minia','menfya']},
    {track : 'php - laravel' , location : ['Benha','menfya']},
    {track : 'angular' , location : ['Benha','cairo university']},
    {track : 'react' , location : ['Benha','smart']}
  ];
  addUser() {
    const name = this.userName;
    const age = Number(this.userAge);
    const track = this.selectedTrack;
      let ok = true;

    if (!track) {
      this.trackErrorMsg = 'Track is required';
      ok = false;
    }

    if (!name) {
      this.nameErrorMsg = 'Name is required';
      ok = false;
    } 

    if (!age) {
      this.ageErrorMsg = 'Age is required';
      ok = false;
    } else if (age <= 18) {
      this.ageErrorMsg = 'Age must be greater than 18';
      ok = false;
    }

    
     if (!ok) return;
  
      this.users.push({name,age,track});
      localStorage.setItem('users', JSON.stringify(this.users));
    
    this.userName = "";
    this.userAge = null;
    this.selectedTrack = "";
    


  }
  loadfromlocal(): IUser[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
  deleteUser(i: number) {
    this.users.splice(i, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
