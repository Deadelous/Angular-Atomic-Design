import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBookmarkComponent } from './icon-bookmark.component';

describe('IconBookmarkComponent', () => {
  let component: IconBookmarkComponent;
  let fixture: ComponentFixture<IconBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
