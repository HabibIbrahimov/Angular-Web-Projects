import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data = [
    { name: 'Can', age: '29', job: 'Endüstri Mühendisi', employed: 'Hayır' },
    { name: 'Osman', age: '30', job: 'Yazılım Mühendisi', employed: 'Hayır' },
    { name: 'Elif', age: '27', job: 'İşletme Mezunu', employed: 'Evet' }
  ];
  headers = [
    { key: 'employed', label: 'Aldığı ücretten memnun mu?' },
    { key: 'name', label: 'Ad Soyad' },
    { key: 'age', label: 'Yaş' },
    { key: 'job', label: 'Meslek' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
