import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('forms submitted with ' + this.bookForm.value)
  } 

  

  bookForm : FormGroup = new FormGroup({
    title: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    year_written: new FormControl ('', [Validators.required , Validators.minLength(4) ,Validators.maxLength(4)])
  })

  get title() {
    return this.bookForm.get('title');
  }
  get year_written() {
    return this.bookForm.get('year_written');
  }
  




}
