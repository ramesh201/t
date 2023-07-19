import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';

const routes: Routes = [
  //{
  //   path: 'tasks',
  //   component: TaskListComponent,
  //   // children: [
  //   //   {
  //   //     path: 'edit/:practiceId',
  //   //     component: PracticeEditComponent,
  //   //   },
  //   // ],
  // },
  // {
  //   path: 'task/edit',
  //   component: TaskItemComponent,
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
})
export class TaskListRoutingModule {}
