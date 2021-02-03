import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto: RestoService) { }
  alert: boolean = false;
  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }

  register() {
    this.resto.registerManager(this.registerUser.value).subscribe((result) => {
      this.alert = true;
      this.registerUser.reset({});
    })
  }

  closeAlert()
  {
    this.alert=false;
  }

}
