import { Entry } from './entry.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhoneBook } from './phonebook.model';
import { PhoneBookEntries } from './phonebookentries.model';

const PHONEBOOK_API_URL = "http://localhost:5000/api/";

@Injectable()
export class PhoneBookService {
    public constructor(
        private httpClient: HttpClient
    ) {

    }

    public createPhoneBook(phoneBookName: string): Promise<PhoneBook> {
        return new Promise<any>((resolve, reject) => {
            this.httpClient
                .post(`${PHONEBOOK_API_URL}phonebook`, { name: phoneBookName})
                .subscribe(
                    (response: any) => {
                        resolve(response);
                    },
                    (error: any) => {
                        reject(error);
                    }
                );
        });
    }

    public addPhoneBookEntry(entry: Entry, phoneBookId: string): void {
        const entryData = {
            entryId: entry.id,
            name: entry.name,
            phoneNumber: entry.phoneNumber,
            phoneBookId: phoneBookId
        }

        this.httpClient
            .post(`${PHONEBOOK_API_URL}phonebook`, entryData);
    }

    public getAllPhoneBooks(): Promise<PhoneBook> {
        return new Promise<any>((resolve, reject) => {
            this.httpClient
                .get(`${PHONEBOOK_API_URL}phonebook`)
                .subscribe(
                    (response: any) => {
                        resolve(response);
                    },
                    (error: any) => {
                        reject(error);
                    }
                );
        });
    }

    public getPhoneBookEntries(phoneBookId: string): Promise<PhoneBookEntries> {
        return new Promise<any>((resolve, reject) => {
            this.httpClient
                .get(`${PHONEBOOK_API_URL}${phoneBookId}/entries`)
                .subscribe(
                    (response: any) => {
                        resolve(response);
                    },
                    (error: any) => {
                        reject(error);
                    }
                );
        });
    }

}