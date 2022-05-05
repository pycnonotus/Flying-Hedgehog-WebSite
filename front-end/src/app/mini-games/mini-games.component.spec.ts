import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGamesComponent } from './mini-games.component';

describe('MiniGamesComponent', () => {
  let component: MiniGamesComponent;
  let fixture: ComponentFixture<MiniGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
