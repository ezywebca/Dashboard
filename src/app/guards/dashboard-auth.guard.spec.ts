import { TestBed } from '@angular/core/testing';

import { DashboardAuthGuard } from './dashboard-auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardAuthGuard', () => {
  let fakeAuth: any;
  let guard: DashboardAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    guard = new DashboardAuthGuard(fakeAuth, {} as any, {} as any);
  });

  it('should be created', () => {
    fakeAuth = {
      updateUser: () => {},
      user: null
    } as any;

    expect(guard).toBeTruthy();
  });

  it('null user is denied', async () => {
    fakeAuth = {
      updateUser: () => {},
      user: null
    } as any;

    const result = await guard.canActivate();

    expect(result).toBeFalsy();
  });

  it('existing user is not denied', async () => {
    fakeAuth = {
      updateUser: () => {},
      user: {}
    } as any;

    const result = await guard.canActivate();

    expect(result).toBeTruthy();
  });
});
