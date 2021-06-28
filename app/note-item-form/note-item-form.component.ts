import { Component, OnInit, ViewChild } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-item-form',
  templateUrl: './note-item-form.component.html',
  styleUrls: ['./note-item-form.component.css']
})
export class NoteItemFormComponent implements OnInit {

  
  note:Note;

  constructor (private noteService : ListServiceService){ }

  ngOnInit(): void {
    this.note = new Note();
  }
  onCreateNote(){
    if(!this.note.title){
      this.note.title = 'Nota';
    }
    this.noteService.addNote(this.note);
    this.note = new Note();
  }

  

}
