import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../Service/http.service';

@Component({
  selector: 'app-parent-transaction',
  templateUrl: './parent-transaction.component.html',
  styleUrls: ['./parent-transaction.component.css'],
})
export class ParentTransactionComponent {
  transactions: any = [];
  pageNumber = 0;
  pageSize = 2;
  totalRows = 0;
  constructor(private httpService: HttpService, private router: Router) {
    this.pageNumber++;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpService
      .get(
        'http://localhost:8080/parents' +
          '?pageSize=' +
          this.pageSize +
          '&pageNumber=' +
          this.pageNumber
      )
      .subscribe({
        next: (data: any) => {
          this.transactions = data.parentTransaction;
          this.totalRows = data.totalRows;
        },
        error: (e) => console.error(e),
      });
  }
  getTransactionDetails(id: number) {
    this.router.navigate(['/transactionDetails'], { queryParams: { id } });
  }
  loadPage(data: any) {
    this.pageNumber = data;
    this.getData();
  }
}
