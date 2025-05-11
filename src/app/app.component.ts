import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,FormsModule,AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sport-studio';
}
