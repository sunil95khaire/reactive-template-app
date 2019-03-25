import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "src/app/user";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  ngOnInit() {}

  user = new User();
  isValidFormSubmitted: boolean = null;

  userForm = new FormGroup({
    uname: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    married: new FormControl(false),
    tc: new FormControl("", Validators.requiredTrue)
  });
  
  constructor(private userService: UserService) {}

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(this.userForm.valid);
    this.user.userName = this.userForm.value.uname; // this.userForm.get("uname").value;
    this.user.gender = this.userForm.get("gender").value;
    this.user.isMarried = this.userForm.get("married").value;
    this.user.isTCAccepted = this.userForm.get("tc").value;
    this.userService.createUser(this.user);
    this.reset();
  }

  reset() {
    this.userForm.reset({
      married: false
    });
  }

  setDefaultValues() {
    this.userForm.patchValue({
      uname: "Krishna",
      gender: "male",
      married: true
    });
  }
}
