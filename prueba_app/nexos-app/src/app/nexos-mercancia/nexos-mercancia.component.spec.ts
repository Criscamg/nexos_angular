import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexosMercanciaComponent } from './nexos-mercancia.component';

describe('NexosMercanciaComponent', () => {
  let component: NexosMercanciaComponent;
  let fixture: ComponentFixture<NexosMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexosMercanciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NexosMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
