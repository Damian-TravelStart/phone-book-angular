import { Component, OnInit } from '@angular/core';
import { PhoneBookStore } from './phonebook.store';

const PHONE_BOOK_NAME = "myPhoneBook";

@Component({
    selector: 'phone-book',
    templateUrl: './phonebook.component.html'
})
export class PhoneBookComponent implements OnInit {
    public entrySearchText: string;
    
    public constructor(
        private phoneBookStore: PhoneBookStore
    ){
        this.entrySearchText = "";
    }

    public ngOnInit(): void {
    }

    public findEntry(): void {
        // entrySearchText
    }
}