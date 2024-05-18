import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
 import {
  BloodGroup,
  Gender,
  Religion,
} from "../../../../Services/DataSharing/SCRMData";
import { MasterClientService } from "../../../../Services/MasterClient/master-client.service";
import { ToasterService } from "../../../../Services/Toaster/toaster.service";
import { webToasterPosition } from "../../../../Services/Toaster/ToastSettings";
 

@Component({
  selector: "ngx-new-students",
  templateUrl: "./new-students.component.html",
  styleUrls: ["./new-students.component.scss"],
})
export class NewStudentsComponent {
  StudentBasicForm: FormGroup;
  StudentOtherForm: FormGroup;
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
  constructor(
    private formBuilder: FormBuilder,
    private _api: MasterClientService,
    private _toaster: ToasterService
  ) {}

  ngOnInit(): void {
    this.religion = Religion;
    this.gender = Gender;
    this.bloodGroup = BloodGroup;
=======
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
     this.StudentBasicForm = this.formBuilder.group({
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
       OSC: [""],
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
    //   this.StudentBasicForm.valueChanges.subscribe(
    //     value => {
    //        this.logValidationErrors()
    //     }
    //  );
     this.getAllClass();
    }

  onSubmit(): void {
    console.log(this.StudentBasicForm.value);

     // RegistrationNo: ["", [Validators.required]],

    // StudentBirthForm: [""],

    const data = {
      studentId: 0,
      name: this.StudentBasicForm.controls["StudentName"].value,
      class: this.StudentBasicForm.controls["Class"].value,
      section: 'A',
      image: this.StudentBasicForm.controls["ImagesUrl"].value,
      dateOfAdmission: this.StudentBasicForm.controls["DateOfAdmission"].value,
      feeDiscount: this.StudentBasicForm.controls["DiscountInFee"].value,
      mobile: this.StudentBasicForm.controls["MobileNoWhatsapp"].value,
      dateOfBirth: this.StudentBasicForm.controls["DOB"].value,
      studentBirthNicId: this.StudentBasicForm.controls["StudentBirthForm"].value,
      orphan: this.StudentBasicForm.controls["isOrphan"].value,
      gender: this.StudentBasicForm.controls["Gender"].value,
      osc: this.StudentBasicForm.controls["OSC"].value,
      identityMarks: this.StudentBasicForm.controls["IdentificationMark"].value,
      previousSchool: this.StudentBasicForm.controls["PreviousSchool"].value,
      religion: this.StudentBasicForm.controls["Religion"].value,
      bloodGroup: this.StudentBasicForm.controls["BloodGroup"].value,
      boardRollNumber: this.StudentBasicForm.controls["BoardRollNo"].value,
      familyAddress: this.StudentBasicForm.controls["Family"].value,
      diseaseIfAny: this.StudentBasicForm.controls["Disease"].value,
      anyAdditionalNotes: this.StudentBasicForm.controls["AdditionalNote"].value,
      totalSiblings: this.StudentBasicForm.controls["TotalSiblings"].value,
      address: this.StudentBasicForm.controls["Address"].value,
      insertUpdateStudentDetailsParentsInfos: [
        {
          studentId: 0,
          name: this.StudentBasicForm.controls["FatherName"].value,
          nationalId: this.StudentBasicForm.controls["FatherNationalID"].value,
          occupationType: this.StudentBasicForm.controls["FOccupation"].value,
          parrentType: "Father",
          educationType: this.StudentBasicForm.controls["MEducation"].value,
          mobile: this.StudentBasicForm.controls["FMobileNo"].value,
          profession: this.StudentBasicForm.controls["FProfession"].value,
          income: this.StudentBasicForm.controls["FIncome"].value,
        },
        {
          studentId: 0,
          name: this.StudentBasicForm.controls["MotherName"].value,
          nationalId: this.StudentBasicForm.controls["MotherNationalID"].value,
          occupationType: this.StudentBasicForm.controls["MOccupation"].value,
          parrentType: "Mother",
          educationType: this.StudentBasicForm.controls["MEducation"].value,
          mobile: this.StudentBasicForm.controls["MMobileNo"].value,
          profession: this.StudentBasicForm.controls["MProfession"].value,
          income: this.StudentBasicForm.controls["MIncome"].value,
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


 
    const data = {
      studentId: 0,
      name: this.StudentBasicForm.controls["name"].value,
      class: this.StudentBasicForm.controls["name"].value,
      section: this.StudentBasicForm.controls["name"].value,
      image: this.StudentBasicForm.controls["name"].value,
      dateOfAdmission: this.StudentBasicForm.controls["name"].value,
      feeDiscount: this.StudentBasicForm.controls["name"].value,
      mobile: this.StudentBasicForm.controls["name"].value,
      dateOfBirth: this.StudentBasicForm.controls["name"].value,
      studentBirthNicId: this.StudentBasicForm.controls["name"].value,
      orphan: this.StudentBasicForm.controls["name"].value,
      gender: this.StudentBasicForm.controls["name"].value,
      osc: this.StudentBasicForm.controls["name"].value,
      identityMarks: this.StudentBasicForm.controls["name"].value,
      previousSchool: this.StudentBasicForm.controls["name"].value,
      religion: this.StudentBasicForm.controls["name"].value,
      bloodGroup: this.StudentBasicForm.controls["name"].value,
      boardRollNumber: this.StudentBasicForm.controls["name"].value,
      familyAddress: this.StudentBasicForm.controls["name"].value,
      diseaseIfAny: this.StudentBasicForm.controls["name"].value,
      anyAdditionalNotes: this.StudentBasicForm.controls["name"].value,
      totalSiblings: this.StudentBasicForm.controls["name"].value,
      address: this.StudentBasicForm.controls["name"].value,
      insertUpdateStudentDetailsParentsInfos: [
        {
          studentId: 0,
          name: this.StudentBasicForm.controls["name"].value,
          nationalId: this.StudentBasicForm.controls["name"].value,
          occupationType: this.StudentBasicForm.controls["name"].value,
          parrentType: "Father",
          educationType: this.StudentBasicForm.controls["name"].value,
          mobile: this.StudentBasicForm.controls["name"].value,
          profession: this.StudentBasicForm.controls["name"].value,
          income: this.StudentBasicForm.controls["name"].value,
        },
        {
          studentId: 0,
          name: this.StudentBasicForm.controls["name"].value,
          nationalId: this.StudentBasicForm.controls["name"].value,
          occupationType: this.StudentBasicForm.controls["name"].value,
          parrentType: "Mother",
          educationType: this.StudentBasicForm.controls["name"].value,
          mobile: this.StudentBasicForm.controls["name"].value,
          profession: this.StudentBasicForm.controls["name"].value,
          income: this.StudentBasicForm.controls["name"].value,
        },
      ],
    };
   }

  //   logValidationErrors() {
  //     debugger
  //     this.formErrors = this._validation.getValidationErrors(this.StudentBasicForm, this.validationMessages);
  // }
  toggleExpand() {
    this.isExpand = !this.isExpand;
  }
   getAllClass() {
    this._api.GetList("Classes", "GetAllClassess").subscribe({
      next: (res) => {
        if (res.statusCode === 200 && res.success) {
          this.classLists = res.responseData;
          console.log("class", this.classLists);
        } else {
          this._toaster.showToast(
            webToasterPosition.toasterTopLeftPosition,
            "info",
            "No record found"
          );
        }
      },
      error: (err) => {
        this._toaster.showToast(
          webToasterPosition.toasterTopLeftPosition,
          "danger",
          err.message
        );
      },
    });
  }

  // uploadImage

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
        this.StudentBasicForm.get("ImagesUrl").setValue(this.imageUrl);
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
