import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nyc',
  templateUrl: './nyc.component.html',
  styleUrls: ['./nyc.component.css'],
})
export class NycComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<string>();
  addUser(value: string) {
    this.newUserEvent.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
