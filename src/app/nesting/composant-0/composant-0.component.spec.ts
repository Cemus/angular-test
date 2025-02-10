import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant0Component } from './composant-0.component';

describe('Composant0Component', () => {
  let component: Composant0Component;
  let fixture: ComponentFixture<Composant0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
