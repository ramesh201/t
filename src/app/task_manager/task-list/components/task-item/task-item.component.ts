import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskListService } from '../../services/task-list.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  service = inject(TaskListService);
  constructor(private router: Router) {}
  ngOnInit(): void {
    //this.task = history.state;
    this.retrieveTask(history.state.taskId);
  }
  retrieveTask(taskId: number): void {
    this.service.getSingleTask(taskId).subscribe(
      (data) => {
        this.task = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editTask(): void {
    debugger;
    this.service.updateTask(this.task).subscribe(
      (data: any) => {
        this.task = data;
        this.router.navigateByUrl('task/edit', {
          state: data,
        });
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
