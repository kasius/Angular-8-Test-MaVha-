import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TasksToDoComponent } from './tasks-to-do.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: TasksToDoComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'form',
        component: FormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksToDoRoutingModule { }
