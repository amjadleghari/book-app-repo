import { TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material-module/my-own-custom-material-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Injectable } from '@angular/core';

import { ResourceService, _url, _endpoint } from './resource.service';
import { Book } from '../model/book';
import { NewBookComponent } from '../new-book/new-book.component';
import { BookListComponent } from '../book-list/book-list.component';
import { APP_BASE_HREF } from '@angular/common';
import { BookSerializer } from '../serializer/book-serializer';
import { Serializer } from '../model/serializer';




describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      NewBookComponent, BookListComponent
    ],
    imports: [
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MyOwnCustomMaterialModule,
      FlexLayoutModule
    ],
    providers: [
      { provide: _url, useValue: '/' },
      { provide: _endpoint, useValue: '' },
      { provide: Serializer, useClass: Serializer},
      ResourceService,
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should be created', () => {
    const service: ResourceService<Book> = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });
});
