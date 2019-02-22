import { TestBed } from '@angular/core/testing';

import { ResourceService } from './resource.service';
import { Book } from '../model/book';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceService<Book> = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });
});
