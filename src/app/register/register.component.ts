import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    username: '',
    password: '',
    isadmin: true,
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  // Button laukaisee tämän metodin.
  // Onnistuneen rekisteröinnin jälkeen käyttäjä ohjataan login sivulle
  registerUser() {
    this.authService.register(this.registerUserData).subscribe(
      () => {
        console.log('rekisteröityminen onnistui');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
