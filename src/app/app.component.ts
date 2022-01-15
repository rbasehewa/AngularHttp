import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularHttp';


  private user: User = {
    'id': 1,
    'name': 'Ryan MMM',
    'username': 'rbase',
    'email': 'abc123@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Vocus',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }

  constructor(private userService:UserService){}


  ngOnInit(): void {
    this.onUpdateUser();
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();

  } 


  onGetUsers():void{

    this.userService.getUsers().subscribe(
      (response) => console.table(response), //response
      (error: any) => console.log(error),  //error
      () => console.log('Done getiing users')  // completion
      );
    }

    onGetUser():void{

      this.userService.getUser().subscribe(
        (response) => console.log(response),
        (error: any) => console.log(error),
        () => console.log('Done getiing users')
        );
      }

      onCreateUser():void{

        this.userService.createUser(this.user).subscribe(
          (response) => console.log(response),
          (error: any) => console.log(error),
          () => console.log('Done creating new user')
          );
        }

        onUpdateUser():void{

          this.userService.updateUser(this.user).subscribe(
            (response) => console.log(response),
            (error: any) => console.log(error),
            () => console.log('Updated the user')
            );
          }


  }
