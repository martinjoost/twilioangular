import { Component, OnInit } from '@angular/core';
import { connect } from 'twilio-video';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-twilio';
  room: any;
  name: string;
  loading: boolean;
  
  
  joinRoom(room){
    this.loading = true;
    this.name = room;
    connect('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UwNzc2ZDdlYmExYmEzOGM0ZTBjZjk1NzAxODFmM2VlLTE1ODkxNjA2MTEiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJtYXJ0aW4iLCJ2aWRlbyI6e319LCJpYXQiOjE1ODkxNjA2MTEsImV4cCI6MTU4OTE3NTAxMSwiaXNzIjoiU0tlMDc3NmQ3ZWJhMWJhMzhjNGUwY2Y5NTcwMTgxZjNlZSIsInN1YiI6IkFDNGY0OTUyNmUwMjkyNmE3NzQxMTg2ZDY5MDdhYzk3NmIifQ.B8ur01S1xxQdWlQYW7npjFwWWpx1mP3oEt9z5wOYl4s', 
    { name: this.name })
    .then( (room) => {
      this.loading = false;
      
      this.room = room;

    }, error => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });
    
  }
}
