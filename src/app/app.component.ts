import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {
    // Listen for auth state changes
    this.auth.isAuth.subscribe((user) => {
      console.log('User:', user);
      // Redirect to the home page if the user is logged in
      if (user) {
        this.router.navigate(['/private']);
      }
    });
  }
}
