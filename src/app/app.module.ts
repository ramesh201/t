import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task_manager/task-list/components/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import {
  NgbModule,
  NgbCollapseModule,
  NgbActiveModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './shared/ui-components/modal/modal/modal.component';
import { BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskItemComponent } from './task_manager/task-list/components/task-item/task-item.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { DialogService } from './shared/services/common/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    NgbModule,
    ModalModule.forRoot(),
    FormsModule,
    NgbModalModule,
    //AccordionModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
