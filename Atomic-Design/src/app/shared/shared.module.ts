import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './atomic/atoms/button/button.component';
import { HeaderComponent } from './atomic/atoms/header/header.component';
import { IconComponent } from './atomic/atoms/icon/icon.component';
import { ImageComponent } from './atomic/atoms/image/image.component';
import { InputComponent } from './atomic/atoms/input/input.component';
import { ParagraphComponent } from './atomic/atoms/paragraph/paragraph.component';
import { TextComponent } from './atomic/atoms/text/text.component';
import { UnorderdlistComponent } from './atomic/atoms/unorderdlist/unorderdlist.component';

import { CardComponent } from './atomic/molecules/card/card.component';
import { SearchComponent } from './atomic/molecules/search/search.component';

import { FooterComponent } from './atomic/organisms/footer/footer.component';
import { GridcardsComponent } from './atomic/organisms/gridcards/gridcards.component';
import { NavbarComponent } from './atomic/organisms/navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    FontAwesomeModule,
    FlexLayoutModule,
    FormsModule
],
  declarations: [ButtonComponent,
    HeaderComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    ParagraphComponent,
    TextComponent,
    UnorderdlistComponent,
    CardComponent,
    SearchComponent,
    FooterComponent,
    GridcardsComponent,
    NavbarComponent
  ],
  exports: [ButtonComponent,
    HeaderComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    ParagraphComponent,
    TextComponent,
    UnorderdlistComponent,
    CardComponent,
    SearchComponent,
    FooterComponent,
    GridcardsComponent,
    NavbarComponent,
    CommonModule
  ],
  providers: []
})
export class SharedModule {
}
