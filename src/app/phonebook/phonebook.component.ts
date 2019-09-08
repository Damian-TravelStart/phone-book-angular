import { find, isEmpty } from 'lodash';
import { Subject } from 'rxjs';

import { PhoneBook } from './phonebook.model';
import { Entry } from './entry.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhoneBookStore } from './phonebook.store';
import { PhoneBookService } from './phonebook.service';
import { MatTableDataSource } from '@angular/material/table';

const PHONE_BOOK_ID = "0d5ef6a8-f733-4ee0-aeb3-de187c91d417";

@Component({
    selector: 'phone-book',
    templateUrl: './phonebook.component.html'
})
export class PhoneBookComponent implements OnInit, OnDestroy {
    public isInEditMode: boolean;
    public dataSource: any;

    public entryName: string;
    public entryPhoneNumber: string;
    public searchEntryText: string;
    public displayedColumns: string[] = ['name', 'phone number'];
    
    private destroyed: Subject<void>;
    private phoneBookEntries: Entry[];

    public constructor(
        private phoneBookStore: PhoneBookStore,
        private phoneBookService: PhoneBookService
    ){
        this.isInEditMode = false
        this.dataSource = new MatTableDataSource();
        this.phoneBookEntries = [] as Entry[];

        this.entryName = "";
        this.entryPhoneNumber = "";
        this.searchEntryText = "";
    }

    public ngOnInit(): void {
        this.phoneBookStore.subscribe(
            (phoneBookEntries: Entry[]) => {
                this.phoneBookEntries = phoneBookEntries;
                this.dataSource = new MatTableDataSource(this.phoneBookEntries);
            }
        );

        this.getPhoneBookEntries();
    }

    public ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

    public addEntry(): void {
        this.isInEditMode = true;
    }

    public submitEntry(): void {
        if (isEmpty(this.entryName) ||
            isEmpty(this.entryPhoneNumber)
        ) {
            return;
        }

        const newEntry: Entry = new Entry();
        newEntry.name = this.entryName;
        newEntry.phoneNumber = this.entryPhoneNumber;
        
        this.clearNewEntryData();

        this.phoneBookService.addPhoneBookEntry(newEntry, PHONE_BOOK_ID);
        
        this.searchEntryText = this.entryName;
        this.isInEditMode = false;
    }

    public applyFilter(searchEntry: any) {
        this.dataSource.filter = searchEntry.trim().toLowerCase();
    }

    private clearNewEntryData(): void {
        this.entryName = "";
        this.entryPhoneNumber = "";
    }

    private getPhoneBookEntries(): void {
        this.phoneBookService.getAllPhoneBookEntries(PHONE_BOOK_ID)
            .then((entries: Entry[]) => {
                this.phoneBookStore.setPhoneBookResults(entries);
            });
    }


}