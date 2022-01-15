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


  private user: any = { // you are sending only parts in the patch ()
    'id': 2,
    'name': 'Ryan Maddu',
    'username': 'rbase',
    'email': 'abc123@april.biz'
  }

  constructor(private userService:UserService){}


  ngOnInit(): void {
    this.onPatchUser();
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

          onPatchUser():void{

            this.userService.patchUser(this.user).subscribe(
              (response) => console.log(response),
              (error: any) => console.log(error),
              () => console.log('Done patch the user')
              );
            }


  }
