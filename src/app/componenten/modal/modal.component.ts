import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  visible: Boolean = false;

  @Input() class: string = '';
  @Input() modalId: string = '';
  @Input() title: string = '';

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.getMessage().subscribe(message => {
      if (this.modalId == message.modalId || message.modalId == 'all') {
        this.visible = message.show;

        $('#' + this.modalId).modal(this.visible ? 'show' : 'hide');
      }
    });
  }

  close() {
    this.modalService.hide(this.modalId);

    this.onClose.emit(undefined);
  }

}
