import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { IFilters, ITableModel } from './shared/table.models';

@Pipe({
    name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

    transform(list: ITableModel[], filters: IFilters) {

        console.log(filters);
        return list.filter(x => this.isInFiltering(x, filters))
    }

    isInFiltering(item: ITableModel, filters: IFilters) {

        if (filters.activity && !item.activity.toUpperCase().includes(filters.activity.toUpperCase())) {
            return false;
        }

        if (filters.type && item.type !== filters.type) {
            return false;
        }

        if (filters.participantsFrom && item.participants < filters.participantsFrom) {
            return false;
        }

        if (filters.participantsTo && item.participants > filters.participantsTo) {
            return false;
        }
        if (filters.priceFrom && item.price < filters.priceFrom) {
            return false;
        }
        if (filters.priceTo && item.price > filters.priceTo) {
            return false;
        }

        if (filters.link) {
            if (!item.link) {
                return false;
            }
        }

        if (filters.key && !item.key.toString().includes(filters.key)) {
            return false;
        }

        if (filters.dateFrom) {
            const dateFrom = moment(filters.dateFrom).toDate();
            if (item.date < dateFrom) {
                return false;
            }
        }

        if (filters.dateTo) {
            const dateTo = moment(filters.dateTo).toDate();
            if (item.date > dateTo) {
                return false;
            }
        }

        return true;
    }

}


