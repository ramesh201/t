import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../ui-components/modal/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  addLogs: Subject<any>;
  constructor(private ngModalService: NgbModal) {
    this.addLogs = new Subject<any>();
  } //private modalService: BsModalService
  // private ngModalService!: NgbModal;
  //defaultModalOptions: ModalOptions = this.getDefaultModalOptions();
  // showYesNoDialog(service: any, selectedRecord: any) {
  //   debugger;
  //   const defaultModalOptions: ModalOptions = this.modalService.show(
  //     ModalComponent,
  //     this.defaultModalOptions
  //   );
  // }

  // getDefaultModalOptions(): ModalOptions {
  //   const options: ModalOptions = {
  //     backdrop: 'static',
  //     ignoreBackdropClick: true,
  //   };
  //   return options;
  // }

  openModal(obj: any): void {
    debugger;
    // const dialogRef = this.dialog.open(ModalComponent, {
    //   data: {
    //     message:
    //       'Do you want to delete the product and the associated licenses?',
    //   },
    // });
  }

  confirm(): // _title: string,
  // _message: string,
  // _btnOkText: string = 'OK',
  // _btnCancelText: string = 'Cancel',
  // _dialogSize: 'sm' | 'lg' = 'sm'
  void {
    this.ngModalService.open(ModalComponent);
    // const modalRef = this.modalService._showModal(ModalComponent, {
    //   size: dialogSize,
    // });
    // modalRef.componentInstance.title = title;
    // modalRef.componentInstance.message = message;
    // modalRef.componentInstance.btnOkText = btnOkText;
    // modalRef.componentInstance.btnCancelText = btnCancelText;

    // return modalRef.result;
  }

  // public confirm(
  //   title: string,
  //   message: string,
  //   btnOkText: string = 'OK',
  //   btnCancelText: string = 'Cancel',
  //   dialogSize: 'sm' | 'lg' = 'sm'
  // ): Promise<boolean> {
  //   this.modalService._showModal(ModalComponent);
  //   // const modalRef = this.modalService._showModal(ModalComponent, {
  //   //   size: dialogSize,
  //   // });
  //   // modalRef.componentInstance.title = title;
  //   // modalRef.componentInstance.message = message;
  //   // modalRef.componentInstance.btnOkText = btnOkText;
  //   // modalRef.componentInstance.btnCancelText = btnCancelText;

  //   return modalRef.result;
  // }
}
