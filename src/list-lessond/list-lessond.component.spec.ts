import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLessondComponent } from './list-lessond.component';

describe('ListLessondComponent', () => {
  let component: ListLessondComponent;
  let fixture: ComponentFixture<ListLessondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLessondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLessondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
