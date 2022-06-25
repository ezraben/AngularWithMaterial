import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

interface user {
  userName: string;
  age: string;
  email: string;
}

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<user>();

  addUser(userName: string, age: string, email: string) {
    let successMsg: any = document.getElementById('successMsg');
    let closeSuccessMsg: any = document.getElementById('closeSuccessMsg');
    closeSuccessMsg.addEventListener('click', () => {
      successMsg.style.display = 'none';
    });

    if (userName.length > 0 && age.length > 0 && email.length > 0) {
      this.newUserEvent.emit({ userName, age, email });
      successMsg.style.display = 'block';
    }
    if (userName.length === 0 || age.length === 0 || email.length === 0) {
      alert('make sure you filled in name age and email');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
