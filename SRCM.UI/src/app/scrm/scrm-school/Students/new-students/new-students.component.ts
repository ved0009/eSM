import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.StudentBasicForm = this.formBuilder.group({
      StudentName: ["", [Validators.required]],
      RegistrationNo: ["", [Validators.required]],
      Class: ["", [Validators.required]],
      DateOfAdmission: ["", [Validators.required]],
      DiscountInFee: ["", [Validators.required]],
      MobileNoWhatsapp: ["", Validators.pattern("0-9")],

      DOB: [""],
      StudentBirthForm: [""],
      isOrphan: [""],
      Gender: [""],
      Cast: [""],
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
  }

  onSubmit(): void {
    console.log(this.StudentBasicForm.value);

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
}
