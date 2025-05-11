import { Component ,Input} from '@angular/core';
export interface Lesson {
  name: string;
  teacher: string;
  numofmeets: string;
  begindate: string;
  price: string;
  day: string;
  hour: number;
}
@Component({
  selector: 'app-lesson-details',
  imports: [],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
 @Input() lesson!: Lesson;
}
