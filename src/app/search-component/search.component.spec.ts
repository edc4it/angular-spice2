import {SearchComponent} from './search.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('SearchComponent', function () {
  let fixture: ComponentFixture<SearchComponent>;
  let component: SearchComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should Show a hint', function () {
    component.hint = 'some place holder text';
    fixture.detectChanges();
    const de = fixture.debugElement;
    const ph = de.nativeElement.querySelector('input').getAttribute('placeholder');
    expect(ph).toBe('some place holder text');
  });

});
