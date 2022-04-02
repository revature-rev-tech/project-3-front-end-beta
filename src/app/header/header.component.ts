import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  isSuccessful = false;
  isSignUpFailed = false;

  form: any = {
    username: null,
    password: null,
    first_name: null,
    last_name: null,
    email: null,
    address: null, 
    contact: null,
    userImage: ['']
  };
  isLoginFailed = false;
  errorMessage = '';

  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  showAdmin = false;
  showUser = false;
  currentUser: any;
  first_name?: string;

  searchQuery: string="";
  
  constructor(private router: Router, 
    private tokenStorageService: TokenStorageService,
    private authService: AuthService) { }

  ngOnInit(): void { }

  logout(): void {
    this.tokenStorageService.signOut();
    this.showAdmin = false; 
    this.showUser = false; 
    this.router.navigate(['/login']);
  }

  isLogged() {
    this.first_name = this.tokenStorageService.getUser().first_name;

    return this.tokenStorageService.isLoggedIn;
  }

  isShowUser(){
    return this.tokenStorageService.getUser().roles.includes('ROLE_USER');
  }

  isShowAdmin(){
    return this.tokenStorageService.getUser().roles.includes('ROLE_ADMIN');
  }

}
