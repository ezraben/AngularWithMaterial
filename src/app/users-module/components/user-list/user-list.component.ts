import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TestService } from '../../test.service';

interface user {
  userName: string;
  age: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: user[] = [];

  addUser(newUser: any) {
    let showUsersBtn: any = document.getElementById('showUsersBtn');
    let allUsers: any = document.getElementById('allUsers');
    let hideUsers: any = document.getElementById('hideUsers');
    showUsersBtn.style.display = 'block';

    showUsersBtn.addEventListener('click', () => {
      allUsers.style.display = 'block';
      hideUsers.style.display = 'block';
      showUsersBtn.style.display = 'none';
    });

    hideUsers.addEventListener('click', () => {
      allUsers.style.display = 'none';
      hideUsers.style.display = 'none';
      showUsersBtn.style.display = 'block';
    });

    for (const iterator of this.users) {
      if (newUser.email === iterator.email) {
        alert('email already exsists');
        return;
      }
    }
    this.users.push(newUser);
    console.log(this.users);
  }

  remove(i: number) {
    this.users.splice(i, 1);
  }

  constructor(private svr: TestService) {
    svr.greet('got what?');
  }

  ngOnInit(): void {}
}
