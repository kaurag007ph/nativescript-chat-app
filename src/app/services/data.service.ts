import { Injectable } from '@angular/core';

export const CONVERSATION_COLORS = [
    '#FFE5A6',
    '#FFE0EB',
    '#FED7C4',
    '#BEE9F2',
    '#C3C1E6',
    '#C4C4C9'
];

export const RECENT_COLORS = [
    '#FFC6CF',
    '#FF94A1',
    '#A9E4F1',
    '#FFFFFF',
    '#C3C1E6',
    '#C4C4C9'
];

export interface Message {
    message: string;
    date: Date;
    isMe: boolean;
    bgColor?: string;
    photo?: string;
}

export interface Conversation {
    id: string;
    firstName: string;
    lastName: string;
    photo: string;
    message: string;
    bgColor?: string;
    date: Date;
}

export interface Recent {
    photo: string;
    bgColor?: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
    private _recents: Recent[] = [
        {
            photo: '~/assets/images/avatar6.png',
            bgColor: RECENT_COLORS[0]
        },
        {
            photo: '~/assets/images/avatar5.png',
            bgColor: RECENT_COLORS[1]
        },
        {
            photo: '~/assets/images/avatar4.png',
            bgColor: RECENT_COLORS[2]
        },
        {
            photo: '~/assets/images/avatar3.png',
            bgColor: RECENT_COLORS[3]
        },
        {
            photo: '~/assets/images/avatar2.png',
            bgColor: RECENT_COLORS[4]
        },
        {
            photo: '~/assets/images/avatar1.png',
            bgColor: RECENT_COLORS[5]
        }
    ];

    private _conversations: Conversation[] = [
        {
            id: '1',
            photo: '~/assets/images/avatar4.png',
            firstName: `Justin`,
            lastName: `O'Moore`,
            message: `Hey there! What's up? is everything alright?`,
            bgColor: CONVERSATION_COLORS[0],
            date: new Date()
        },
        {
            id: '2',
            photo: '~/assets/images/avatar3.png',
            firstName: 'Alaya',
            lastName: 'Cordova',
            message: `Can I call you back later? I'm in a meeting right now.`,
            bgColor: CONVERSATION_COLORS[1],
            date: new Date()

        },
        {
            id: '3',
            photo: '~/assets/images/avatar2.png',
            firstName: 'Eathan',
            lastName: 'Sheridan',
            message: `Yeah. Do you have any good song that can recomment?`,
            bgColor: CONVERSATION_COLORS[2],
            date: new Date()

        },
        {
            id: '4',
            photo: '~/assets/images/avatar1.png',
            firstName: 'Cecily',
            lastName: 'Trujillo',
            message: `Hi! I went shopping today and found something that you may like.`,
            bgColor: CONVERSATION_COLORS[3],
            date: new Date()

        },
        {
            id: '5',
            photo: '~/assets/images/avatar5.png',
            firstName: 'Komal',
            lastName: 'Orr',
            message: 'I will go to your office this afternoon',
            bgColor: CONVERSATION_COLORS[4],
            date: new Date()
        },
        {
            id: '6',
            photo: '~/assets/images/avatar6.png',
            firstName: 'Justin',
            lastName: 'Co',
            message: 'Today is a beautiful day',
            bgColor: CONVERSATION_COLORS[5],
            date: new Date()
        },
    ];

    private _messages: Message[] = [
        { message: `Yeah I know! I'm in the \n same position 😂`, isMe: true, date: new Date() },
        { message: `It's hard to be productive, man 🙄`, isMe: false, date: new Date(), photo: '~/assets/images/avatar4.png', },
        { message: `Same here! Been watching \nYouTube for the past 5 hours despite of having so much to do! 😅`, isMe: false, date: new Date() },
        { message: `Nothing. Just chilling and watching Youtube. What about you?`, isMe: true, date: new Date() },
        { message: `Hey there! What's up?`, isMe: false, date: new Date(), photo: '~/assets/images/avatar4.png', }
    ]

    constructor() { }

    get conversations(): Conversation[] {
        return this._conversations;
    }

    get recents(): Recent[] {
        return this._recents;
    }

    getMessages(conversationId: string): Message[] {
        const conversation = this.getConversation(conversationId);

        return this._messages.map(message => {
            if (message.photo) {
                message.photo = conversation.photo;
                message.bgColor = conversation.bgColor;
            }

            return message;
        });
    }

    getConversation(id: string) {
        return this._conversations.find(conversation => conversation.id === id);
    }

    addMessage(message: string): void {
        let newMessage = {
            message,
            isMe: true,
            date: new Date()
        };

        this._messages.unshift(newMessage);
    }

}
