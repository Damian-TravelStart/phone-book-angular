import { Injectable } from "@angular/core";
import { PhoneBook } from './phonebook.model';
import { Entry } from './entry.model';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class PhoneBookStore {
    private phoneBookSubject: BehaviorSubject<Entry[]>;
    private phoneBookEntries: Entry[];

    public constructor(){
        this.phoneBookSubject = new BehaviorSubject<Entry[]>([] as Entry[]);
    }

    public setPhoneBookResults(phoneBookEntries: Entry[]): void {
        this.phoneBookEntries = phoneBookEntries;
        this.emitChanges();
    }

    public clearPhoneBookResults(): void {
        this.phoneBookEntries = undefined;
        this.emitChanges();
    }

    public subscribe(
        onChangeCallBack: (phoneBookEntries: Entry[]) => void
    ): void {
        this.phoneBookSubject
            .subscribe(onChangeCallBack);
    }

    private emitChanges(): void {
        this.phoneBookSubject.next(this.phoneBookEntries);
    }
}