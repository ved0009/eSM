import { Component } from '@angular/core';
import { webToasterPosition } from '../../../../Services/Toaster/ToastSettings';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterClientService } from '../../../../Services/MasterClient/master-client.service';
import { ToasterService } from '../../../../Services/Toaster/toaster.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent {
  newClassForm: FormGroup;
  classId:number;

  constructor(private fb:FormBuilder,private _api:MasterClientService,private _toaster:ToasterService
    ,private _activeRouter:ActivatedRoute
  ){}
  ngOnInit():void{
    this.classId = +this._activeRouter.snapshot.paramMap.get('id');
    this.getClassById()
    this.newClassForm=this.fb.group({
      classname:['', [Validators.required]],
      tutionfee:['', [Validators.required]],
      classteacher:['', [Validators.required]]
    })

  }

  getClassById(){
    this._api.Get('Classes','GetAllClassessById'+'/'+this.classId).subscribe({
      next: (res) => {
        if (res.statusCode === 200 && res.success) {
          this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'success',res.message);
         console.log('daa',res.responseData);
         const dataA = res.responseData;
         this.newClassForm.setValue({
          classname:dataA.className,
          tutionfee:dataA.monthTutionFees,
          classteacher:dataA.classTeacherId
         });

        } else {
          this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'info',res.message);
        }
      },
      error: (err) => {
        this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'danger',err.message);
      },
    });
  }

  onSubmit(): void {
    console.log(this.newClassForm.value);
    const data = {
      id: this.classId,
      className: this.newClassForm.controls['classname'].value,
      monthTutionFees: this.newClassForm.controls['tutionfee'].value,
      classTeacherId: this.newClassForm.controls['classteacher'].value,
      totalBoys: 10,
      totalGirls: 12,
      totalStudents: 22
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



