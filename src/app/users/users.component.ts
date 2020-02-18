import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    usersList

  constructor() { }

  ngOnInit(): void {
    fetch('https://reqres.in/api/users')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
        this.usersList = myJson;
        console.log(this.usersList);
    });
  }
  }
