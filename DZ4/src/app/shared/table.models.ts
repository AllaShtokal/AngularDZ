export interface IFilters{
    activity:string;
    type:string;
    participantsFrom: number;
    participantsTo: number;
    priceFrom:number;
    priceTo:number;
    key:string;
    link: boolean;
    dateFrom: string;
    dateTo: string;

}

export interface ITableModel{
    activity:string;
    type:string;
    participants: number;
    price:number;
    key:number;
    link: boolean;
    date: Date;

}