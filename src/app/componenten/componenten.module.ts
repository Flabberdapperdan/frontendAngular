import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModalComponent } from './messagemodal/messagemodal.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    MessageModalComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageModalComponent,
    ModalComponent
  ]
})
export class ComponentenModule { }
