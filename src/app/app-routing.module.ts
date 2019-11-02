import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'tasks-to-do', pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: 'tasks-to-do', loadChildren: './tasks-to-do/tasks-to-do.module#TasksToDoModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
