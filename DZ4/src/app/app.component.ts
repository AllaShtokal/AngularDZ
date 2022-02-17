import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TableHttpService } from './shared/table-http.service';
import { ITableModel } from './shared/table.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dataFromApi: ITableModel[] = [];
  constructor(private tableHttpService: TableHttpService){

  }

  types: string[] = ["social", "busywork", "relaxation", "recreational", "education", "cooking", "charity", "music"];
  
  ngOnInit(): void {
    this.tableHttpService.getItems()
    .pipe(take(1))
    .subscribe(items=>this.setTableItems(items))
  }

  setTableItems(items: ITableModel[]){
    this.dataFromApi = items;
    
    console.log('setTableItems',items);
  }

  
}
