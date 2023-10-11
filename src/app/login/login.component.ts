import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username: string = ""
  password: string = ""
  errorMessage:string =""
  ngOnInit(): void
  {
    
  }
  constructor(private router:Router,private auth:AuthService){}
  login()
  {
    //checks the login credentials
    if (this.username.trim().length === 0)
    {
      this.errorMessage = "username is required"
    } else if (this.password.trim().length === 0)
    {
      this.errorMessage = "password is required"
    } else
    {
      //navigate the user to endpoint 'movie' if username and password is correct
      //endpoint movie if the logic value is true
        this.errorMessage = ""
        let res = this.auth.login(this.username, this.password)
        if (res === 200)
        {
          this.router.navigate(['home'])
        } if (res === 403)
        {
          this.errorMessage = "sorry, wrong login credentials"
        }
    }
    
  }
}
