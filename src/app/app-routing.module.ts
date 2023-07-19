import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task_manager/task-list/components/task-list/task-list.component';
import { TaskItemComponent } from './task_manager/task-list/components/task-item/task-item.component';

const routes: Routes = [
  { path: '', component: TaskListComponent, pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent, pathMatch: 'full' },
  //{ path: '**', component: TaskItemComponent, pathMatch: 'full' },
  {
    path: 'task/edit',
    component: TaskItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
