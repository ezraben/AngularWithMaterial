import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UserListComponent, UserItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [UserItemComponent, UserListComponent],
})
export class UsersModuleModule {}
