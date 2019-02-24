import { HttpClient } from '@angular/common/http';

import { Injectable, Inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Resource } from '../model/resource';
import { QueryOptions } from '../interface/query-builder';
import { Serializer } from '../model/serializer';

export const _url = 'url';
export const _endpoint = 'endpoint';

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T extends Resource> {
  constructor(
    private httpClient: HttpClient,
    @Inject(_url) private url: string,
    @Inject(_endpoint) private endpoint: string,
    private serializer: Serializer) { }

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  list(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`)
      /* .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)*/
      .pipe(map((data: any) =>
        this.convertData(data)
      ));
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item =>
      this.serializer.fromJson(item)
    );
  }
}
