import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MessageModalComponent } from './messagemodal/messagemodal.component';
import { ModalComponent } from './modal/modal.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    ButtonComponent,
    MessageModalComponent,
    ModalComponent,
    QrCodeComponent,
  ],
  imports: [CommonModule, NgxQRCodeModule],
  exports: [
    ButtonComponent,
    MessageModalComponent,
    ModalComponent,
    QrCodeComponent,
  ],
})
export class ComponentsModule {}
