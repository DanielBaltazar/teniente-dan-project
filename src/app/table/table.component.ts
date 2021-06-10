import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  active: boolean;
  itemSelected: any;
  totalElements: number;

  @Input() dataTable: Array<any>;
  @Input() columnsTable: Array< { tittle: string; field: string; } >;

  constructor() {
    this.totalElements = 100;
  }

  ngOnInit(): void {}

  pageChange(pageNow: { first: number, rows: number } ): void {
    console.log(pageNow);
  }

  activeFilter(): void {
    this.active = !this.active;
  }
}
