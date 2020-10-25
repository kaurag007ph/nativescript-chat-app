import { knownFolders } from "@nativescript/core";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule } from "@nativescript/angular";
import { TNSFontIconModule, USE_STORE } from 'nativescript-ngx-fonticon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConversationsComponent } from './screens/conversations.component';
import { ConversationComponent } from './screens/conversation.component';
import { AvatarComponent } from './components/avatar.component';
import { MessagesComponent } from './components/messages.component';
import { ChatInputComponent } from './components/chat-input.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        TNSFontIconModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ConversationsComponent,
        ConversationComponent,
        AvatarComponent,
        MessagesComponent,
        ChatInputComponent
    ],
    providers: [
        {
            provide: USE_STORE,
            useValue: {
                fa: knownFolders.currentApp().getFile("assets/css/fontawesome.css").readTextSync()
              }
        }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
