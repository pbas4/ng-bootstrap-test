import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Yo soy tu padre';
  titleForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.titleForm = fb.group({
      'inputTitle': ['', Validators.compose([ Validators.required, Validators.minLength(1) ])]
    })
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  resetTitle() {
    this.title = 'Yo soy tu padre'
  }

}
