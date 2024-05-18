import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BloodGroup, Gender, Religion } from '../../../../Services/DataSharing/SCRMData';
import { MasterClientService } from '../../../../Services/MasterClient/master-client.service';
import { ToasterService } from '../../../../Services/Toaster/toaster.service';
import { webToasterPosition } from '../../../../Services/Toaster/ToastSettings';

@Component({
  selector: 'ngx-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent {
  EmployeeBasicForm: FormGroup;
  isExpand: Boolean = true;

  validationMessages = {
    StudentName: {
      required: "StudentName is required.",
    },
    RegistrationNo: {
      required: "RegistrationNo is required.",
    },
    Class: {
      required: "Class is required.",
    },
    DateOfAdmission: {
      required: "DateOfAdmission is required.",
    },
    DiscountInFee: {
      required: "DateOfAdmission is required.",
    },
    MobileNoWhatsapp: {
      pattern: "DateOfAdmission is required.",
    },
  };
  formErrors = {};
  religion: { id: number; name: string }[];
  selectedFile: File = null;
  imageUrl: string = "";
  gender: { id: number; name: string }[];
  bloodGroup: { id: number; name: string }[];
  classLists: any;
  RolesLists: any;
  constructor(
    private formBuilder: FormBuilder,
    private _api: MasterClientService,
    private _toaster: ToasterService
  ) {}

  ngOnInit(): void {
    // this.GetRoles();
    this.religion = Religion;
    this.gender = Gender;
    this.bloodGroup = BloodGroup;
    this.EmployeeBasicForm = this.formBuilder.group({
      StudentName: ["", [Validators.required]],
      RegistrationNo: ["", [Validators.required]],
      Class: ["", [Validators.required]],
      DateOfAdmission: ["", [Validators.required]],
      DiscountInFee: ["", [Validators.required]],
      MobileNoWhatsapp: ["", Validators.pattern("0-9")],
      ImagesUrl: ["", Validators.required],

      DOB: [""],
      StudentBirthForm: [""],
      isOrphan: [""],
      Gender: [""],
      Cast: [""],
      OSC: ["2"],
      IdentificationMark: [""],
      PreviousSchool: [""],
      Religion: [""],
      BloodGroup: [""],
      BoardRollNo: [""],
      Family: [""],
      Disease: [""],
      AdditionalNote: [""],
      TotalSiblings: [""],
      Address: [""],

      FatherName: [""],
      FatherNationalID: [""],
      FOccupation: [""],
      FEducation: [""],
      FMobileNo: [""],
      FProfession: [""],
      FIncome: [""],

      MotherName: [""],
      MotherNationalID: [""],
      MOccupation: [""],
      MEducation: [""],
      MMobileNo: [""],
      MProfession: [""],
      MIncome: [""],
    });
    //   this.EmployeeBasicForm.valueChanges.subscribe(
    //     value => {
    //        this.logValidationErrors()
    //     }
    //  );
    this.GetRoleName();
    //
  }

  onSubmit(): void {
    console.log(this.EmployeeBasicForm.value);

    // RegistrationNo: ["", [Validators.required]],

    // StudentBirthForm: [""],

    const data = {
      studentId: 0,
      name: this.EmployeeBasicForm.controls["StudentName"].value,
      class: this.EmployeeBasicForm.controls["Class"].value,
      section: 'A',
      image: this.EmployeeBasicForm.controls["ImagesUrl"].value,
      dateOfAdmission: this.EmployeeBasicForm.controls["DateOfAdmission"].value,
      feeDiscount: this.EmployeeBasicForm.controls["DiscountInFee"].value,
      mobile: this.EmployeeBasicForm.controls["MobileNoWhatsapp"].value,
      dateOfBirth: this.EmployeeBasicForm.controls["DOB"].value,
      studentBirthNicId: this.EmployeeBasicForm.controls["StudentBirthForm"].value,
      orphan: this.EmployeeBasicForm.controls["isOrphan"].value,
      gender: this.EmployeeBasicForm.controls["Gender"].value,
      osc: this.EmployeeBasicForm.controls["OSC"].value,
      identityMarks: this.EmployeeBasicForm.controls["IdentificationMark"].value,
      previousSchool: this.EmployeeBasicForm.controls["PreviousSchool"].value,
      religion: this.EmployeeBasicForm.controls["Religion"].value,
      bloodGroup: this.EmployeeBasicForm.controls["BloodGroup"].value,
      boardRollNumber: this.EmployeeBasicForm.controls["BoardRollNo"].value,
      familyAddress: this.EmployeeBasicForm.controls["Family"].value,
      diseaseIfAny: this.EmployeeBasicForm.controls["Disease"].value,
      anyAdditionalNotes: this.EmployeeBasicForm.controls["AdditionalNote"].value,
      totalSiblings: this.EmployeeBasicForm.controls["TotalSiblings"].value,
      address: this.EmployeeBasicForm.controls["Address"].value,
      insertUpdateStudentDetailsParentsInfos: [
        {
          studentId: 0,
          name: this.EmployeeBasicForm.controls["FatherName"].value,
          nationalId: this.EmployeeBasicForm.controls["FatherNationalID"].value,
          occupationType: this.EmployeeBasicForm.controls["FOccupation"].value,
          parrentType: "Father",
          educationType: this.EmployeeBasicForm.controls["MEducation"].value,
          mobile: this.EmployeeBasicForm.controls["FMobileNo"].value,
          profession: this.EmployeeBasicForm.controls["FProfession"].value,
          income: this.EmployeeBasicForm.controls["FIncome"].value,
        },
        {
          studentId: 0,
          name: this.EmployeeBasicForm.controls["MotherName"].value,
          nationalId: this.EmployeeBasicForm.controls["MotherNationalID"].value,
          occupationType: this.EmployeeBasicForm.controls["MOccupation"].value,
          parrentType: "Mother",
          educationType: this.EmployeeBasicForm.controls["MEducation"].value,
          mobile: this.EmployeeBasicForm.controls["MMobileNo"].value,
          profession: this.EmployeeBasicForm.controls["MProfession"].value,
          income: this.EmployeeBasicForm.controls["MIncome"].value,
        },
      ],
    };

    this._api.Post(data,'Student','InsertUpdateStudentDetails').subscribe({
      next:res=>{
        this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'success','New student created');
      },
      error:res=>{
        this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'danger','Error while creating new student');
      }
    })


  }

  //   logValidationErrors() {
  //     debugger
  //     this.formErrors = this._validation.getValidationErrors(this.EmployeeBasicForm, this.validationMessages);
  // }
  toggleExpand() {
    this.isExpand = !this.isExpand;
  }


  // uploadImage
  GetRoleName(){
    this._api.GetList('Common','GetRoles').subscribe({
      next:res=>{
        console.log('erro',res);

        this.RolesLists = res.responseData;
       },
      error:res=>{
        this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'danger','Error while creating new student');
      }
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  UploadImage() {
    const fd = new FormData();
    fd.append("image", this.selectedFile, this.selectedFile.name);
    this._api.Post(fd, "Common", "UploadImage").subscribe({
      next: (res) => {
        this.imageUrl = res.url;
        console.log("imagepath", this.imageUrl);
        this.EmployeeBasicForm.get("ImagesUrl").setValue(this.imageUrl);
        this._toaster.showToast(
          webToasterPosition.toasterTopLeftPosition,
          "success",
          "Picture uploaded successfully"

        );
      },
      error: (err) => {
        this._toaster.showToast(
          webToasterPosition.toasterTopLeftPosition,
          "danger",
          "Error while uploading picture"

        );
      },
    });
  }
}
