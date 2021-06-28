import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from '../list-service.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [];
  router:Router;

  constructor(private noteService : ListServiceService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  
  


}
