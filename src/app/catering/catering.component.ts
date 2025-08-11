import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CateringCategory {
  category: string;
  list: string[];
}

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  categories: CateringCategory[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<CateringCategory[]>('assets/catering.json').subscribe(data => {
      this.categories = data;
    });
  }
}
