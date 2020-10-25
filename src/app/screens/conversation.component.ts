import { Message, DataService, Conversation } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
    selector: 'app-conversation',
    styles: [`
        .nav-bar { justify-content: space-between; padding: 0 24; }
        .call { margin-right: 12; }
        Button { background-color: transparent; color: #878ABE; }
        Button.fas {
            width: 32;
            height: 32;
            font-size: 13;
            border-radius: 100%;
            color: #FFFFFF;
            background: #878BCA;
        }
    `],
    template: `
        <StackLayout class="page">
            <FlexboxLayout class="nav-bar">
                <Button text="Back" (tap)="back()"></Button>
                <Button text="Search"></Button>
            </FlexboxLayout>
            <GridLayout rows="auto" columns="*, auto, auto" padding="0 24">
                <Label [text]="conversation.firstName + '\n' + conversation.lastName" class="h1" textWrap="true"></Label>
                <Button col="1" class="fas call" [text]="'fa-phone-alt' | fonticon"></Button>
                <Button col="2" class="fas" [text]="'fa-video' | fonticon"></Button>
            </GridLayout>

            <GridLayout class="container" rows="*, auto">
                <app-messages row="0" [messages]="messages"></app-messages>
                <app-chat-input row="1" (onChat)="addMessage($event)"></app-chat-input>
            </GridLayout>
        </StackLayout>
    `
})
export class ConversationComponent implements OnInit {
    conversation: Conversation;
    messages: Message[];

    constructor(
        private page: Page,
        private route: ActivatedRoute,
        private router: RouterExtensions,
        private dataService: DataService
    ) { }

    ngOnInit() {
        const conversationId = this.route.snapshot.params.id;

        this.page.actionBarHidden = true;
        this.conversation = this.dataService.getConversation(conversationId);
        this.getMessages();
    }

    getMessages(): void {
        const conversationId = this.route.snapshot.params.id;

        this.messages = this.dataService.getMessages(conversationId);
    }

    addMessage(message: string): void {
        this.dataService.addMessage(message);
        this.getMessages();
    }
    back(): void {
        this.router.back();
    }
}
