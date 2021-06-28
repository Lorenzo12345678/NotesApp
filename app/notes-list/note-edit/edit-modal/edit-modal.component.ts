import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note';



@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @Input() note:Note;
  @ViewChild('form') modalForm: NgForm;
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.note);
  }
  
  closeModal(event:Event){
      this.modalForm.form.get('title').setValue(this.note.title);
      this.modalForm.form.get('description').setValue(this.note.description);
      this.modalForm.form.get('argument').setValue(this.note.argument);
    console.log(this.modalForm);
  }

  onConfirm(event:Event){
    this.note.title = this.modalForm.form.get('title').value;
    this.note.description = this.modalForm.form.get('description').value;
    this.note.argument = this.modalForm.form.get('argument').value;
  }


}
