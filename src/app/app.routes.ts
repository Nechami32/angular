import { Routes } from '@angular/router';
import { ListLessondComponent } from '../list-lessond/list-lessond.component';
import { StudentsComponent } from '../students/students.component';
export const routes: Routes = [
    { path: 'secretary', component: ListLessondComponent },
    { path: 'teacher', component: StudentsComponent }
];






