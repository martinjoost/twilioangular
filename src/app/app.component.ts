import { Component, OnInit } from '@angular/core';
import { connect, TrackNameCharsInvalidError } from 'twilio-video';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-twilio';
  loading:boolean;
  roomData: any;



  joinRoom(roomName){
    this.loading = true;
    
    const { connect } = require('twilio-video');

    connect('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UwNzc2ZDdlYmExYmEzOGM0ZTBjZjk1NzAxODFmM2VlLTE1ODkxNzA2NzEiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJtYXJ0aW4iLCJ2aWRlbyI6e319LCJpYXQiOjE1ODkxNzA2NzEsImV4cCI6MTU4OTE4NTA3MSwiaXNzIjoiU0tlMDc3NmQ3ZWJhMWJhMzhjNGUwY2Y5NTcwMTgxZjNlZSIsInN1YiI6IkFDNGY0OTUyNmUwMjkyNmE3NzQxMTg2ZDY5MDdhYzk3NmIifQ.198L6hDrhEjrMGYccjK9qIU9L-zieKYr9h2PR34YvTI', 
    { name: roomName.value })
    .then(room => {
      this.roomData = room;
      this.loading = false;
      room.on('participantConnected', participant => {
        console.log(`A remote Participant connected: ${participant}`);
      });
    }, error => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });
  }
}
