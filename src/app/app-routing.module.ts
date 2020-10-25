import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ConversationsComponent } from "./screens/conversations.component";
import { ConversationComponent } from './screens/conversation.component';

const routes: Routes = [
    { path: "", redirectTo: "/conversations", pathMatch: "full" },
    { path: "conversations", component: ConversationsComponent },
    { path: "conversations/:id", component: ConversationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
