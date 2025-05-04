import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-siginup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './siginup.component.html'
})
export class SiginupComponent implements OnInit {

  myForm!: FormGroup;

  onSubmit() {
    console.log(this.myForm.valid);    
    console.log(this.myForm.value);
    this.myForm.reset(); // corrigido: () no reset
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
        firstNameTS: new FormControl(null, Validators.required),
        lastNameTS: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(16)
        ]),
        emailTS: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-zA-Z0-9\\-_.]+@[a-zA-Z0-9\\-_.]+")
        ]),
        passwordTS: new FormControl(null, Validators.required)
    });
 }
}
