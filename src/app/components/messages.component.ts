import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    styles: [`
        ListView, Label, .avatar { transform: scaleY(-1); }
        .message-container { columns: auto, *, auto; padding: 8 24; }
        .avatar { col: 0; vertical-alignment: top }
        .message { col: 1; }
        .time {
            color: gray;
            horizontal-alignment: right;
            vertical-alignment: center;
            col: 2;
        }
        .message Label {
            color: #776F8C;
            font-weight: 600;
            background-color: #EFF0F1;
            border-radius: 32 32 32 0;
            text-wrap: true;
            padding: 24 12;
            margin: 0 24 0 12;
        }
        .is-me Image { col: 2; }
        .is-me .time { col: 0; }
        .is-me .message { justify-content: flex-end; }
        .is-me .message Label {
            border-radius: 32 32 0 32;
            margin: 0 0 0 24;
            background-color: #EDEEF7;
            align-self: flex-end;
        }

    `],
    template: `
        <ListView [items]="messages" separatorColor="transparent">
            <ng-template let-message="item">

                <GridLayout class="message-container" [class.is-me]="message.isMe" verticalAlignment="bottom">
                    <StackLayout class="avatar">
                        <app-avatar *ngIf="message.photo" [photo]="message.photo" [bgColor]="message.bgColor" width="32" height="32" padding="2"></app-avatar>
                    </StackLayout>
                    <FlexboxLayout class="message">
                        <Label [text]="message.message"></Label>
                    </FlexboxLayout>
                    <Label  [text]="message.date | date:'h:mm'" class="time"></Label>
                </GridLayout>

            </ng-template>
        </ListView>
    `
})

export class MessagesComponent implements OnInit {
    @Input() messages;

    constructor() { }

    ngOnInit() { }
}
