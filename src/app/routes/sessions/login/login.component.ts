import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService, StartupService, TokenService } from '@core';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private token: TokenService,
    private startup: StartupService,
    private settings: SettingsService,
    private sharedService: SharedService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() { }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  userList: Array<any> = [
    { id: 1, name: 'Prasad S', username: 'prasad', password: 'prasad', avatar: './assets/images/pexels-brett-sayles-3638045.jpg' },
    { id: 2, name: 'Krishna K', username: 'krishna', password: 'krishna', avatar: './assets/images/pexels-simon-robben-614810.jpg' },
  ];
  login() {
    if (this.loginForm.valid) {
      const loginInfo = this.loginForm.value;
      const user = this.userList.find(x => x.username == loginInfo.username && x.password == loginInfo.password);
      if (user != null) {
        this.sharedService.loggedInUser = { id: user.id, name: user.name, email: user.email, avatar: user.avatar };
        // Set user info
        this.settings.setUser(this.sharedService.loggedInUser);
        // Set token info
        this.token.set(this.sharedService.loggedInUser);
        // Regain the initial data
        this.startup.load().then(() => {
          let url = this.token.referrer!.url || '/';
          if (url.includes('/auth')) {
            url = '/';
          }
          this.router.navigateByUrl(url);
        });
      }
    }
  }
}
