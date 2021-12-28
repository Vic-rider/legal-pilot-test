import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() {
    this.chat = true
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
