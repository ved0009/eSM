import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialongService } from './Dialong/dialong.service';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LoadingComponent } from './Loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderElement: HTMLElement;
  loadingDialogRef: NbDialogRef<LoadingComponent>;

  constructor(private _dialog: NbDialogService) { }

  showLoad() {
    this.loadingDialogRef = this._dialog.open(LoadingComponent);
  }

  hideLoad() {
    if (this.loadingDialogRef) {
      this.loadingDialogRef.close();
    }
  }


  showLoader(): void {
    if (!this.loaderElement) {
      this.loaderElement = document.createElement('div');
      this.loaderElement.innerHTML = `



      `;
      document.body.appendChild(this.loaderElement);
    }
  }

  hideLoader(): void {
    if (this.loaderElement) {
      document.body.removeChild(this.loaderElement);
      this.loaderElement = null;
    }
  }
}
