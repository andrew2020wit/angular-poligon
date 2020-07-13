import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

interface UserJPH {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-http-jsonplaceholder',
  templateUrl: './http-jsonplaceholder.component.html',
  styleUrls: ['./http-jsonplaceholder.component.scss']
})
export class HttpJsonplaceholderComponent implements OnInit {

  httpAddressJPH = 'https://jsonplaceholder.typicode.com';
  usersJPH: UserJPH[];
  idForm = '';
  nameForm = '';
  emailForm = '';

  isLoaded = false;
  delayMS = 1500;
  errorMessage = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoaded = false;
    this.httpClient.get<UserJPH[]>(`${this.httpAddressJPH}/users`)
      .pipe(delay(this.delayMS))
      .subscribe(
      ( users) => {
        this.usersJPH = users;
        this.isLoaded = true;
      }, (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  userDelete(id: number) {
    this.httpClient.delete(`${this.httpAddressJPH}/users/${id}`)
      .subscribe( resp => console.log(`userDelete:`, resp));
    const index = this.usersJPH.findIndex( user => user.id === id);
    this.usersJPH.splice(index, 1);
  }


  addUser(name1: string, email1: string) {
    this.httpClient.post<UserJPH>(`${this.httpAddressJPH}/users`,
      {
        name: name1,
        email: email1
      }).subscribe( resp => {
        console.log(`addUser:`, resp);
        this.usersJPH.push(resp);
      });
  }

  updateUser(id1: number, name1: string, email1: string, index: number) {
    this.httpClient.put(`${this.httpAddressJPH}/users/${id1}`,
      {
        name: name1,
        email: email1
      }).subscribe( resp => console.log(`updateUser:`, resp));
    this.usersJPH[index].name = name1;
    this.usersJPH[index].email = email1;
  }

  addUpdateAction(){

    const nameTrim = this.nameForm.trim();
    if (nameTrim === '') { return; }

    const idTrim = this.idForm.trim();
    const emailTrim = this.emailForm.trim();

    if (idTrim === '') {
      this.addUser(nameTrim, emailTrim);
      return;
    }

    const index = this.usersJPH.findIndex( user => user.id === +idTrim);

    if ( index !== -1 ) {
      this.updateUser(+idTrim, nameTrim, emailTrim, index);
    } else {
      this.addUser(nameTrim, emailTrim);
      return;
    }

  }

}
