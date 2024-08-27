import { Component } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent {
  colors = ['red', 'blue', 'green', 'orange'];
  notes = [];
  counter = 1;
  addNote() {
    this.notes.push({
      id: this.counter,
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      color: this.colors[0],
    });
    this.counter++;
  }

  deleteNote(id: number) {
    console.log('Deleted Note:', id);
    const noteIndex = this.notes.indexOf(
      this.notes.find((note) => note.id === id)
    );
    console.log('index:', noteIndex);
    const logNote = this.notes.splice(noteIndex, 1);
    console.log(logNote);
  }
}
