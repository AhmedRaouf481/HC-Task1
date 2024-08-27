import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Output() handleDeleteNote = new EventEmitter<number>();
  @Input() note:{
    id: number;
    title: string;
    content: string;
    date: string;
    color:string;
  } = {
    id: 0,
    title: '',
    content: '',
    date: '',
    color: 'red',
  }
  
  @Input() colors = [];

  changeBgColor(color:string){
    this.note.color = color
  }

  handleDelete(id: number) {
    this.handleDeleteNote.emit(id);
  }

}
