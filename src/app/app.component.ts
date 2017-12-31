import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{
    let config = {
      apiKey: "AIzaSyAZwdYG1RGo94_4swqoClbwtbq4oWsgsOA",
      authDomain: "angular-instagram-clone.firebaseapp.com",
      databaseURL: "https://angular-instagram-clone.firebaseio.com",
      projectId: "angular-instagram-clone",
      storageBucket: "angular-instagram-clone.appspot.com",
      messagingSenderId: "632889734859"
    };
    firebase.initializeApp(config);
  }
}
