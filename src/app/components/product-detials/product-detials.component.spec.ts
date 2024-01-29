import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetialsComponent } from './product-detials.component';

describe('ProductDetialsComponent', () => {
  let component: ProductDetialsComponent;
  let fixture: ComponentFixture<ProductDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetialsComponent]
    });
    fixture = TestBed.createComponent(ProductDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
