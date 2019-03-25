import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  ngOnInit() {
  }

  isValidFormSubmitted = false;
	user = new User();
  constructor(private userService: UserService) {	}
  
	onFormSubmit(form: NgForm) {
	   this.isValidFormSubmitted = false;
	   if(form.invalid){
		  return;	
	   } 	
	   this.isValidFormSubmitted = true;
	  //  this.user.userName = form.controls['uname'].value;
	  //  this.user.gender = form.controls['gender'].value;
	  //  this.user.isMarried = form.controls['married'].value;
	  //  this.user.isTCAccepted = form.controls['tc'].value;
	   this.userService.createUser(this.user);
	   this.resetForm(form);
  }
  
	resetForm(form: NgForm) {
	   this.user = new User();	
	   form.resetForm({
		   married: false
	   }); 
  }
  
	setDefaultValues() {
	   this.user.userName = 'Krishna';
	   this.user.gender = 'male';
	   this.user.isMarried = true;
	   this.user.isTCAccepted = false;
	}
}
