import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  inputName = '';
  roleItem = null;
  ageItem = null;
  subItem = null;

  isShown:boolean = false;

 showDiv(){
this.isShown = ! this.isShown;
  }
  getColor() {  
    return this.roleItem === 'student' ? 'yellow' : 'rgb(93, 226, 93)';  
  }  

  roles: any[] = [
    { name: 'student' },
    { name: 'professor' },
    { name: 'dekan' },
];

ages: any[] = [
  { age: '18' },
  { age: '19' },
  { age: '20' },
  { age: '21' },
  { age: '22' },
  { age: '23 and older' },
];

subjectsSelected: any[] | undefined
subjects: any[] = [
  {
    "name": "Math",
    "day": "Pon"
  },
  {
    "name": "Chemia",
    "day": "Pon"
  },
  {
    "name": "Fizyka",
    "day": "Vivt"
  },
  {
    "name": "Algebra",
    "day": "Ser"
  },
  {
    "name": "Algebra",
    "day": "Weekend"
  }
];


}
