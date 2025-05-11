import { Component } from '@angular/core';
import { UsersService, Users } from '../app/users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
    imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  subject = '';

  constructor(private usersService: UsersService, private router: Router) {}

  onLogin() {
     console.log('Username:', this.username);
console.log('Password:', this.password);
    const user = this.usersService.getUser(this.username, this.password);

    if (user) {
      this.subject = user.subject;

      if (this.subject === 'secretary') {
        
        this.router.navigate(['secretary']);
      } else if (this.subject === 'teacher') {
        this.router.navigate(['teacher']);
      }
    } else {
      console.log(user)
      console.log(this.username)
      console.log(this.password)
      alert('שם משתמש או סיסמה לא נכונים');
    }
  }
}
