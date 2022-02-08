import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-dotwDotm',
    templateUrl: 'dotwDotm.component.html',
    styleUrls: ['dotwDotm.component.css']
})
export class DotwDotmComponent{
    @Input() dotw: string;
    @Input() dotm: number;

    constructor(){
        this.dotw = "DOTW?";
        this.dotm = -1;
    }
}