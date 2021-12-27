import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAppComponent } from './chat-app.component';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatBadgeModule } from '@angular/material/badge'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

import { LessTextPipe } from 'src/app/core/pipes/lessText.pipe';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatMenuModule,

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
