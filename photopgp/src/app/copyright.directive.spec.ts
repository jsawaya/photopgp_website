import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightDirective } from './copyright.directive';

describe('CopyrightDirective', () => {
  let component: CopyrightDirective;
  let fixture: ComponentFixture<CopyrightDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
});

