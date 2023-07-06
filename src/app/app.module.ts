import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ParentTransactionComponent } from './parent-transaction/parent-transaction.component';
import { ChildTransationComponent } from './child-transation/child-transation.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ParentTransactionComponent,
    ChildTransationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule, 
    RouterModule.forRoot([
      { path: '', component: ParentTransactionComponent, pathMatch: 'full' },
      { path: 'transactions', component: ParentTransactionComponent, pathMatch: 'full' },
      { path: 'transactionDetails', component: ChildTransationComponent, pathMatch: 'full' },
    ]), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
