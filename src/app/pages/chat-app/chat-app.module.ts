import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAppComponent } from './chat-app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatAppComponent
      }
    ])
  ],
  declarations: [ChatAppComponent]
})
export class ChatAppModule { }
