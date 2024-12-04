import { TestBed } from '@angular/core/testing';

import { GitReposService } from './git-repos.service';

describe('GitReposService', () => {
  let service: GitReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
