import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient, HttpParams, HttpClientModule} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my lil app';
  name:string;
  constructor(private httpClient: HttpClient) { }

  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  getJoke() {
    this.httpClient.get('http://api.icndb.com/jokes/random/')
      .subscribe(
        (data: any) => {
          if (data != null) {
            var brand = data;
            this.name = brand['value']['joke'];
          }
        }
      )
  }
}
