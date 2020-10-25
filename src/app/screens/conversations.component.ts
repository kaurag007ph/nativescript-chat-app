import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

import { Conversation, DataService, Recent } from './../services/data.service';

@Component({
    selector: 'app-conversations',
    styles: [`
        .name { font-weight: bold; color: #473964; font-size: 14; }
        .message { color: #473964; },
        .time { color: gray; }
        .h1 { margin: 24; }
        .container { padding: 54 0; }
    `],
    template: `
        <StackLayout class="page">

            <Label text="Chat with \nyour friends" class="h1" textWrap="true"></Label>

            <ScrollView orientation="horizontal" height="60" scrollBarIndicatorVisible="false">
                <StackLayout orientation="horizontal" paddingLeft="24">
                    <Button class="fas" [text]="'fa-search' | fonticon" width="56" height="56" fontSize="18" borderRadius="100%" color="#fff" margin="0 12 0 0" background="rgb(134, 137, 203)"></Button>
                    <app-avatar *ngFor="let recent of recents" [photo]="recent.photo" [bgColor]="recent.bgColor" margin="0 8"></app-avatar>
                </StackLayout>
            </ScrollView>

            <StackLayout class="container">
                <ListView [items]="conversations" separatorColor="transparent" height="100%">
                    <ng-template let-conversation="item">
                      <StackLayout orientation="horizontal" padding="12 24" verticalAlignment="center" (tap)="select(conversation)">
                        <app-avatar margin="8" [photo]="conversation.photo" width="62" height="62" [bgColor]="conversation.bgColor"></app-avatar>
                        <GridLayout rows="auto, auto", columns="*, auto" verticalAlignment="center">
                            <Label col="0" class="name" [text]="conversation.firstName + ' ' + conversation.lastName"></Label>
                            <Label row="1" class="message" colSpan="2" [text]="conversation.message"></Label>
                            <Label col="1" class="time" [text]="conversation.date | date:'h:mm'"></Label>
                        </GridLayout>
                      </StackLayout>
                    </ng-template>
                </ListView>
            </StackLayout>
        </StackLayout>
    `
})

export class ConversationsComponent implements OnInit {
    recents: Recent[];
    conversations: Conversation[];

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private dataService: DataService
    ) {
        this.page.actionBarHidden = true;
        this.recents = this.dataService.recents;
        this.conversations = this.dataService.conversations;
    }

    ngOnInit() { }

    select(conversation) {
        this.router.navigate(['/conversations', conversation.id]);
    }
}
