import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-avatar',
    template: `
        <StackLayout
            [width]="width"
            [height]="height"
            [margin]="margin"
            borderRadius="100%"
            [backgroundColor]="bgColor"
            [padding]="padding">
            <Image *ngIf="photo" [src]="photo" stretch="aspectFit"></Image>
        </StackLayout>
    `
})

export class AvatarComponent implements OnInit {
    @Input() width = 56;
    @Input() height = 56;
    @Input() padding = 8;
    @Input() margin = 0;
    @Input() photo: string;
    @Input() bgColor = `#C4C4C9`;

    constructor() { }

    ngOnInit() { }
}
