import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

    private subject = new Subject<any>();
    private modalObject: any | undefined;

    public show(modalId: string, modalObject?: any) {
        this.subject.next( {'show': true, 'modalId': modalId} );

        this.modalObject = modalObject;
    }

    public hide(modalId: string) {
        this.subject.next( {'show': false, 'modalId': modalId} );
    }

    getModalObject(): any | undefined {
        return this.modalObject;
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}
