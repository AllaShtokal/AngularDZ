import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { forkJoin, from, merge, Observable, of } from "rxjs";
import { ITableModel } from "./table.models";
import { map } from "rxjs/operators";
import * as moment from "moment";


@Injectable()
export class TableHttpService{
    private readonly url = 'https://www.boredapi.com/api/activity';
    

    constructor(private httpClient: HttpClient) {
    }

    getItems(): Observable<ITableModel[]>{
        const observables = [];
        for (let index = 0; index < 20; index++) {
            observables.push(this.getItem());
        }
        return forkJoin(observables)
        .pipe(map(items=>{
            items.forEach(item=>this.addRandomDate(item));
            return items;
        }));
    }




    private addRandomDate(item: ITableModel){
        const randomDate = moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
        .toDate();
        item.date = randomDate;
    }

    private getItem(): Observable<ITableModel>{
        console.log('getItem');
        return this.httpClient.get<ITableModel>(this.url);
    }
}

