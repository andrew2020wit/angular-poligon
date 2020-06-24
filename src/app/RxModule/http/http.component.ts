import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface IUser{
  name: string;
  age: number;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  users: IUser[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/users.json').subscribe((data: IUser[]) => this.users = data);
  }

}
