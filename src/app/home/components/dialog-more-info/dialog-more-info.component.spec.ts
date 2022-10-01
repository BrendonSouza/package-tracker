import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMoreInfoComponent } from './dialog-more-info.component';

describe('DialogMoreInfoComponent', () => {
  let component: DialogMoreInfoComponent;
  let fixture: ComponentFixture<DialogMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
