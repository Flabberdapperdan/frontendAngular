import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service';

declare var $: any;

@Component({
  selector: 'app-messagemodal',
  templateUrl: './messagemodal.component.html',
  styleUrls: ['./messagemodal.component.scss']
})
export class MessageModalComponent implements OnInit {

  visible = false;

  @Output() onCancel = new EventEmitter();
  @Output() onAction = new EventEmitter();

  @Input() modalId: string = '';
  @Input() message: string = '';
  @Input() title: string = '';

  @Input() cancelMessage: string = '';
  @Input() actionMessage: string = '';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.getMessage().subscribe(message => {
      if (this.modalId == message.modalId) {
        this.visible = message.show;

        $('#' + this.modalId).modal(this.visible ? 'show' : 'hide');
      }
    });
  }

  onCancelClick() {
    this.onCancel.emit(false);

    this.modalService.hide(this.modalId);
  }

  onActionClick() {
    this.onAction.emit(true);
  }

}
