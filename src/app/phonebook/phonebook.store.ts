import { Injectable } from "@angular/core";
import { PhoneBook } from './phonebook.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class PhoneBookStore {
    private phoneBookSubject: BehaviorSubject<PhoneBook>;
    private phoneBook: PhoneBook;

    public constructor(){
        this.phoneBookSubject = new BehaviorSubject<PhoneBook>(this.phoneBook);
    }

    public setPhoneBookResults(phoneBook: PhoneBook): void {
        this.phoneBook = phoneBook;
        this.emitChanges();
    }

    public clearPhoneBookResults(): void {
        this.phoneBook = undefined;
        this.emitChanges();
    }

    public subscribe(
        unsubscribeSubject: Subject<void>,
        onChangeCallBack: (phoneBook: PhoneBook) => void
    ): void {
        this.phoneBookSubject
            .pipe(takeUntil(unsubscribeSubject))
            .subscribe(onChangeCallBack);
    }

    private emitChanges(): void {
        this.phoneBookSubject.next(this.phoneBook);
    }
}