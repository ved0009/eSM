import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-new-classes',
  templateUrl: './new-classes.component.html',
  styleUrls: ['./new-classes.component.scss']
})
export class NewClassesComponent {
  newClassForm: FormGroup;

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
    
 }
}
