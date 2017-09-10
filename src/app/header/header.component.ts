import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

@Output()sectionClickedString = new EventEmitter<string>();

    showClickedSection(buttonClicked: string){
        this.sectionClickedString.emit(buttonClicked);
    }
}