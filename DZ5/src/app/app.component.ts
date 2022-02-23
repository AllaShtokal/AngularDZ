import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Member, HomeAddress, Tag, Technology } from './models/user';
import { CustomValidators } from './models/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  tags: string[] = Object.keys(Tag).slice(Object.keys(Tag).length / 2)
  currentDate = new Date();
  occupations: string[] = ["Employed as developer", "Student IT", "Student(not IT)", "Unemployed/Employed as not dev"];
  address = new HomeAddress();
  member = new Member();
  submitted = false;
  showErrorMessage = false;
  isVisible = true;

  get technologies() {
    return this.form.get('mTechnologies') as FormArray;
  }
  castToFormGroup(control: AbstractControl):FormGroup{ return control as FormGroup;}

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      mName: new FormControl('Full Name', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      mEmail: new FormControl('Yourmail@12.com', [Validators.required, Validators.email, CustomValidators.isEmailAllowedAsync]),
      mOccupation: new FormControl(this.occupations[0]),
      mWantToWorkInExistek: new FormControl(),
      mJoiningDate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'), Validators.required),
      address: new FormGroup({
        mCountry: new FormControl('Poland', [Validators.pattern('[a-zA-Z ]*'), CustomValidators.acceptableCountries]),
        mCity: new FormControl('Lublin', Validators.pattern('[a-zA-Z ]*')),
        mStreet: new FormControl('Konopnicka', Validators.pattern('[a-zA-Z ]*')),
        mHomeNumber: new FormControl('6', Validators.pattern("^[0-9]*$")),
      }),
      mTechnologies: new FormArray([])

    });

    this.addTechnology();
    this.checkCheckBox();

  }

  checkCheckBox() {
    this.form.get('mOccupation')?.valueChanges
      .subscribe((value: string) => {
        if (value === this.occupations[0]) {
          this.form.patchValue({
            mWantToWorkInExistek: false
          })
        } else
          this.form.patchValue({
            mWantToWorkInExistek: true
          })
      })
  }

  get addressGroup(): FormGroup {
    return this.form.controls['address'] as FormGroup;
  }
  get techGroupName(){
    return this.form.controls['formGroupName'] as FormGroup;
  }

  addTechnology(): void {
    this.technologies.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        tag: new FormControl('', Validators.required)
      })
    );
  }

  removeTechnology(id: number) {
    this.technologies.removeAt(id);
  }

  onSubmit() {
    if (!this.form.invalid) {
      this.showErrorMessage = false;
      this.submitted = true;
      this.member.name = this.form.value.mName;
      this.member.email = this.form.value.mEmail;
      this.member.occupation = this.form.value.mOccupation;
      this.member.wantToWorkInExistek = this.form.value.mWantToWorkInExistek;
      this.member.joiningDate = this.form.value.mJoiningDate;
      this.member.address = this.form.value.address;
      this.member.technologies = this.form.value.mTechnologies;
      this.form.reset();
    }

    else {
      this.showErrorMessage = true
      this.submitted = false;
    }
  }

}
