import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-chat-input',
    styles: [`
        GridLayout {
            margin: 24;
        }
        TextView {
            placeholder-color: #8f8e9e;
            background-color: #F7F7F8;
            padding: 24;
            border-width: 0;
            border-radius: 24;
            min-height: 48;
        }

        Button {
            width: 32;
            height: 32;
            margin: 0 24;
            border-radius: 100%;
            color: #FFFFFF;
            background: #585fb2;
        }
    `],
    template: `
        <GridLayout columns="*, auto" [formGroup]="chatForm">
            <TextView col="0" colSpan="2" hint="Type your message..." formControlName="message"></TextView>
            <Button col="1" class="fas" [text]="'fa-paper-plane' | fonticon" (tap)="sendMessage(chatForm.value)"></Button>
        </GridLayout>
    `
})

export class ChatInputComponent implements OnInit {
    @Output() onChat: EventEmitter<string> = new EventEmitter();

    chatForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.chatForm = this.fb.group({
            message: [null, Validators.required]
        })
    }

    ngOnInit() { }

    sendMessage(chatFormValue: { message: string }) {
        if (this.chatForm.valid) {
            this.onChat.emit(chatFormValue.message);
            this.chatForm.reset();
        }
    }
}
