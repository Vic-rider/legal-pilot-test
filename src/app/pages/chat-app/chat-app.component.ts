import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusinessChatAccountInfoComponent } from 'src/app/layouts/business-chat-account-info/business-chat-account-info.component';
import { SecureChatInfoComponent } from 'src/app/layouts/secure-chat-info/secure-chat-info.component';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {

  chat = false;
  showFiller = false;

  msg_list = [
    {
      text: 'Hello, comment tu vas ?',
      fromMe: false,
      date: new Date()
    },
    {
      text: 'Super bien et toi ?',
      fromMe: true,
      date: new Date()
    }
  ]

  newMsg:any

  constructor(
    private _router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.chat = true
  }

  addMessage() {

    if(!this.newMsg) {
      return
    }

    this.msg_list.push(
      {
        text: this.newMsg,
        fromMe: true,
        date: new Date()
      }
    )

    this.newMsg = ''

  }

  logout() {
    localStorage.removeItem('pilot_Chat_token')
    this._router.navigate(['/auth'])
  }

  viewMoreAboutSecureChat() {
    this.dialog.open(SecureChatInfoComponent, {
      width: "450px",
    });
  }

  viewMoreAboutBusinessChat() {
    this.dialog.open(BusinessChatAccountInfoComponent, {
      width: "450px",
    });
  }

  toogleToolbar(tool:any) {
    tool.toggle()
  }

}
