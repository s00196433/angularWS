import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  @Input() book?: Book;
  @Output() bookFormClose = new EventEmitter<Book>();
  message: string = "";
  //bookForm? : FormGroup  ;
   bookForm : FormGroup= new FormGroup({});
  

  constructor() { }

  ngOnInit(): void {

    this.bookForm = new FormGroup({
      title: new FormControl(this.book?.title, [Validators.required, Validators.minLength(1)]),
      year_written: new FormControl(this.book?.year_written, [Validators.required, Validators.max(2024)])
      
    })
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.bookForm?.value);
    this.bookFormClose.emit(this.bookForm?.value)
  }

  get title() {
    return this.bookForm?.get('title');
  }
  get year_written() {
    return this.bookForm?.get('year_written');
  }



  closeForm() {
    this.bookFormClose.emit(undefined)

  }

  


}
