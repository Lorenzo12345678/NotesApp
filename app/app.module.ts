import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListServiceService } from './list-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './notes-list/note-item/note-item.component';
import { NoteItemFormComponent } from './note-item-form/note-item-form.component';
import { NoteEditComponent } from './notes-list/note-edit/note-edit.component';
import { EditModalComponent } from './notes-list/note-edit/edit-modal/edit-modal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesListComponent,
    NoteItemComponent,
    NoteItemFormComponent,
    NoteEditComponent,
    EditModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
