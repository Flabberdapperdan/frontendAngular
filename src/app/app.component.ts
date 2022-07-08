import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  title = 'frontendAngular';

  showModal() {
    this.modalService.show('model-2');
  }
}
