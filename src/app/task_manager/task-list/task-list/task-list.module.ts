import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListRoutingModule } from './task-list-routing.module';
import { FormsModule } from '@angular/forms';
import {
  NgbActiveModal,
  NgbCollapseModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from 'src/app/shared/services/common/dialog.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    NgbModule,
    NgbCollapseModule,
    MatButtonModule,
    MatDialogModule,
    //  MatDialog,
  ],
  providers: [],
})
export class TaskListModule {}
