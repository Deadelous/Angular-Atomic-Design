import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atomic-a-icon-bookmark',
  templateUrl: './icon-bookmark.component.html',
  styleUrls: ['./icon-bookmark.component.css']
})
export class IconBookmarkComponent implements OnInit {

  faBookmark = faBookmark;

  constructor() { }

  ngOnInit() {
  }

}
