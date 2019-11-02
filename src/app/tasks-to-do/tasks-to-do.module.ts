import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { TasksToDoRoutingModule } from './tasks-to-do-routing.module';

// Components
import { TasksToDoComponent } from './tasks-to-do.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [TasksToDoComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    TasksToDoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksToDoModule { }
