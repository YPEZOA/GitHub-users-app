import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from 'src/environments/shared/shared.module';
@NgModule({
  declarations: [
    SearchFieldComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class HomeModule { }
