import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemFormComponent } from './note-item-form.component';

describe('NoteItemFormComponent', () => {
  let component: NoteItemFormComponent;
  let fixture: ComponentFixture<NoteItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
