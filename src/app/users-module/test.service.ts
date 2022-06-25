import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  greet(msg: any) {
    console.log(msg);
  }

  constructor() {}
}
