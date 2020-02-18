import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

    usersTable

  constructor() { }

  ngOnInit(): void {
    fetch('https://reqres.in/api/users')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
        this.usersTable = myJson;
        console.log(this.usersTable);
    });
  }

}
