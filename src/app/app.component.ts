// import { Component } from '@angular/core';
// import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HttpClientModule } from '@angular/common/http';
// import { SignupComponent } from './signup/signup.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'hospital';
// }



import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected property name
})
export class AppComponent {
  title = 'hospital';
}
