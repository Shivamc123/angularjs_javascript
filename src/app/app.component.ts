import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

mydata =[
  {
name : "shivam",
id : 36111150
  },
  {
name : "anand",
id : 36110076
  }
];
userForm
constructor(){
  this.userForm=new FormGroup({
    'name' : new FormControl(),
    'id' : new FormControl()
  })
  
}
formSubmit(){
  console.log(this.userForm.value);
  this.mydata.push(this.userForm.value);
}
}