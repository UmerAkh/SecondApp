import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Customer } from 'src/app/model/customer';


// function dobValidation(min: number, max: number): ValidatorFn {
//   return (c: AbstractControl): { [key: string]: boolean } | null => {
//     if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
//       return { range: true };
//     }
//     return null;
//   };
// }


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  customerForm!: FormGroup;
  customer = new Customer;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.customerForm=this.fb.group({
      firstName:['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.maxLength(50)],
      email:['', Validators.email],
      dob: [''],
      gender:['', Validators.required ],
      mobile:['']

    });
  }

  save(){
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
