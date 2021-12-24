import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAppComponent } from './chat-app.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { LessTextPipe } from 'src/app/core/pipes/lessText.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatAppComponent
      }
    ])
  ],
  declarations: [ChatAppComponent, LessTextPipe]
})
export class ChatAppModule { }
