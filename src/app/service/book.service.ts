import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from '../model/book';
import { ResourceService } from './resource.service';
import { BookSerializer } from '../serializer/book-serializer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BookService extends ResourceService<Book> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'api',
      'books',
      new BookSerializer());
  }
}
