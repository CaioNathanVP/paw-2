import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sigin.component.html'
})
export class SiginComponent implements OnInit {
  myFormIn!: FormGroup;

  constructor(private fb: FormBuilder) {}

  minusculoFValidator(control: AbstractControl) {
    const pass = control.value as string;
    if (pass && pass !== pass.toLowerCase()) {
      return { minusculoF: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.myFormIn = this.fb.group({
      emailTS: [
        null,
        [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9\\-_.]+@[a-zA-Z0-9\\-_.]+")
        ]
      ],
      passwordTS: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          this.minusculoFValidator
        ]
      ]
    });
  }

  onSubmit() {
    console.log(this.myFormIn.value);
    this.myFormIn.reset();
  }
}
