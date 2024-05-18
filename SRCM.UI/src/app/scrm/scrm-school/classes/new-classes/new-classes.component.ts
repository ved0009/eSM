import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { MasterClientService } from '../../../../Services/MasterClient/master-client.service';
import { ToasterService } from '../../../../Services/Toaster/toaster.service';
import { webToasterPosition } from '../../../../Services/Toaster/ToastSettings';
 
@Component({
  selector: 'ngx-new-classes',
  templateUrl: './new-classes.component.html',
  styleUrls: ['./new-classes.component.scss']
})
export class NewClassesComponent {
  newClassForm: FormGroup;

   constructor(private fb:FormBuilder,private _api:MasterClientService,private _toaster:ToasterService){}
  ngOnInit():void{
    this.newClassForm=this.fb.group({
      classname:['', [Validators.required]],
      tutionfee:['', [Validators.required]],
      classteacher:['', [Validators.required]]
   constructor(private fb:FormBuilder){}
  ngOnInit():void{
    this.newClassForm=this.fb.group({
      classname:['', [Validators.required]],
      tutionfee:['', [Validators.required]], 
      classteacher:['', [Validators.required]] 
     })

  }
  onSubmit(): void {
    console.log(this.newClassForm.value);
     const data = {
      id: 0,
      className: this.newClassForm.controls['classname'].value,
      monthTutionFees: this.newClassForm.controls['tutionfee'].value,
      classTeacherId: this.newClassForm.controls['classteacher'].value,
      totalBoys: 1,
      totalGirls: 2,
      totalStudents: 2
    }
    this._api.Post(data,'Classes','InsertUpdatedClassess').subscribe({
      next: (res) => {
        if (res.statusCode === 200 && res.success) {
          this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'success',res.message);
          this.newClassForm.reset();
        } else {
          this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'info',res.message);
        }
      },
      error: (err) => {
        this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'danger',err.message);
      },
    });
  }

 }

 
    
 }
}
 