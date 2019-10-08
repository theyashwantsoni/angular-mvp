import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PresentorService } from '../presentor/presentor.service';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  login:FormGroup;

  constructor(private formBuilder: FormBuilder,private ps: PresentorService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['theyashwantsoni@gmail.com', [Validators.required, Validators.email]],
      pass: ['qwer1234', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(){
    if(!this.login.valid){
      console.log('invalid inputs');
      return;
    }else{
      this.ps.sendAuthData(this.login.value).subscribe(data => console.log(data));
    }
  }
}
