import { Component, OnInit, ViewChildren, inject } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { TaskListDTO } from '../../models/task-list.model';
import { DialogService } from '../../../../shared/services/common/dialog.service';
//import { DialogService } from 'src/app/shared/services/common/dialog.service';
import { Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import * as bootstrap from '@ng-bootstrap/ng-bootstrap';
//import { ModalComponent } from 'src/app/shared/ui-components/modal/modal/modal.component';
import { ModalComponent } from '../../../../shared/ui-components/modal/modal/modal.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

//i//mport { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
//declare var window: any;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  //standalone: true,
  // imports: [MatButtonModule, MatDialogModule],
})
export class TaskListComponent implements OnInit {
  formModal: any;
  service = inject(TaskListService);
  //modalService = inject(mod);
  //dialogService = inject(DialogService);
  tasks!: TaskListDTO[];
  task: any;
  isCollapsed: boolean = true;
  selectedTask: any;
  public collapse!: NgbCollapse;

  constructor(
    private router: Router,
    private dialog: MatDialog //  private dialogService: DialogService
  ) {}

  //@ViewChildren(TaskListComponent) collapses!: TaskListComponent[];

  //modalName: bootstrap.NgbModal | undefined;
  ngOnInit(): void {
    this.retrieveTasks();
  }

  // openDialog(
  //   enterAnimationDuration: string,
  //   exitAnimationDuration: string
  // ): void {
  //   debugger;
  //   this.dialog.open(ModalComponent, {
  //     width: '100px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  // openFormModal() {
  //   var a = new (window as any).bootstrap.Modal('myModal');
  //   a.show();
  // }

  deleteProduct(id: number) {
    this.service.inactiveTask(id).subscribe(
      (data) => {
        this.task = this.tasks.filter((item) => item.taskId !== id);
        console.log('Product deleted successfully!');
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  openFormModal(task: any): void {
    debugger;
    this.selectedTask = task;
    //new DialogService.bind() .addLogs.next(task);
    // const dialogRef = this.dialog.open(ModalComponent, {
    //   // data: {
    //   //   message:
    //   //     'Do you want to delete the product and the associated licenses?',
    //   // },
    // });

    // dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    //   if (confirmed) {
    //     this.deleteProduct(task.id);
    //   }
    // });
  }

  showDescription(task: any): void {
    debugger;
    if (this.selectedTask == null || this.selectedTask.taskId == task.taskId)
      this.isCollapsed = !this.isCollapsed;
    else if (this.selectedTask.taskId != task.taskId) this.isCollapsed = false;
    // this.ngbCollapse.toggle();

    this.selectedTask = task;
  }

  editTask(task: any) {
    this.router.navigateByUrl('task/edit', {
      state: task,
    });
  }

  deleteTask(task: any): void {
    debugger;
    //this.dialogService.confirm(this.dialogService, this.selectedTask);
  }

  retrieveTasks(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.tasks = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
