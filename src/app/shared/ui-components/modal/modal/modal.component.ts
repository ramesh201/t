import { Component, Input, Output, TemplateRef, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DialogService } from 'src/app/shared/services/common/dialog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskListService } from 'src/app/task_manager/task-list/services/task-list.service';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

export interface IModalComponentResponse {
  isActive: boolean;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  service = inject(TaskListService);
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() btnOkText: string = '';
  @Input() btnCancelText: string = '';
  @Input() selectedTask: any;

  @Input() isActive = false;
  @Output() modalData: any;
  //selectedTask:any;

  @Input() yesAction = (data: IModalComponentResponse) => null;
  constructor(
    public modalRef: BsModalRef,
    private activeModal: NgbActiveModal,
    private dialog: MatDialog,
    private router: Router
  ) {
    debugger;
    //this.openDialog();
  }

  performDeleteAction() {
    debugger;
    //this.mod.open(this);

    this.yesAction(this.setResponse());
    this.modalRef.hide();
  }

  private setResponse() {
    return { isActive: this.isActive };
  }

  deleteTask(taskId: any) {
    debugger;
    this.service.inactiveTask(taskId).subscribe(
      (data) => {
        // this.task = this.tasks.filter((item) => item.taskId !== id);
        alert('Inactivate succesfully');
        debugger;
        this.router.navigate(['/tasks']);
        // const url = ''; //self.location.href; //self ? this.router.url : this.router.url;
        // //this.router.navigateByUrl().then(()=>{
        // this.router.navigate([`/${url}`]).then(() => {
        //   console.log(`After navigation I am on:${this.router.url}`);
        // });
        //})
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

  openDialog() {
    const dialogRef = this.dialog.openDialogs;
  }
}
