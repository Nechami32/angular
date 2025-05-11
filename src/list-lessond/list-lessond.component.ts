import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
interface Lesson {
  name: string;
  teacher: string;
  numofmeets: string;
  begindate: string;
  price: string;
  day: string;
  hour: number;
}
@Component({
  selector: 'app-list-lessond',
  imports: [NgFor,NgIf,CommonModule,LessonDetailsComponent],
  templateUrl: './list-lessond.component.html',
  styleUrl: './list-lessond.component.css'
})
export class ListLessondComponent {
   lessons: Lesson[] = [
    { name: 'gym', teacher: 'hhhh',numofmeets:'2',begindate:"11-05-2025",price:"550",day:"sunday",hour:5},
    { name: 'gym', teacher: 'hhhh',numofmeets:'2',begindate:"01-02-4567",price:"550",day:"sunday",hour:5},
    { name: 'gym', teacher: 'hhhh',numofmeets:'2',begindate:"01-02-4567",price:"550",day:"sunday",hour:5},
    { name: 'gym', teacher: 'hhhh',numofmeets:'2',begindate:"01-02-4567",price:"550",day:"sunday",hour:5}
  ];
  hasStarted(lesson: Lesson): boolean {
  const [day, month, year] = lesson.begindate.split('-').map(Number);
  const beginDateTime = new Date(year, month - 1, day, lesson.hour);
  return new Date() >= beginDateTime;
}
selectedLesson: Lesson | null = null;

selectLesson(lesson: Lesson) {
  this.selectedLesson = lesson;
}
}
