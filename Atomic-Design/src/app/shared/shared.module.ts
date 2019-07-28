import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from  '@angular/common/http';

import { ButtonComponent } from './atomic/atoms/button/button.component';
import { HeaderComponent } from './atomic/atoms/header/header.component';
import { IconComponent } from './atomic/atoms/icon/icon.component';
import { ImageComponent } from './atomic/atoms/image/image.component';
import { InputComponent } from './atomic/atoms/input/input.component';
import { ParagraphComponent } from './atomic/atoms/paragraph/paragraph.component';
import { TextComponent } from './atomic/atoms/text/text.component';
import { UnorderdlistComponent } from './atomic/atoms/unorderdlist/unorderdlist.component';
import { LinkComponent } from './atomic/atoms/link/link.component';
import { ExternlinkComponent } from './atomic/atoms/externlink/externlink.component';
import { TableComponent } from './atomic/atoms/table/table.component';

import { CardComponent } from './atomic/molecules/card/card.component';
import { SearchComponent } from './atomic/molecules/search/search.component';

import { FooterComponent } from './atomic/organisms/footer/footer.component';
import { GridcardsComponent } from './atomic/organisms/gridcards/gridcards.component';
import { NavbarComponent } from './atomic/organisms/navbar/navbar.component';


import { SearchService } from './services/search.service';
import { FilterPipe } from './filter/shared.filter';



@NgModule({
  imports: [CommonModule,
    RouterModule,
    FontAwesomeModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ButtonComponent,
    HeaderComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    ParagraphComponent,
    TextComponent,
    UnorderdlistComponent,
    TableComponent,
    LinkComponent,
    ExternlinkComponent,
    CardComponent,
    SearchComponent,
    FooterComponent,
    GridcardsComponent,
    NavbarComponent,
    FilterPipe,
  ],
  exports: [ButtonComponent,
    HeaderComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    ParagraphComponent,
    TextComponent,
    UnorderdlistComponent,
    TableComponent,
    ExternlinkComponent,
    LinkComponent,
    CardComponent,
    SearchComponent,
    FooterComponent,
    GridcardsComponent,
    NavbarComponent,
    FilterPipe,
    CommonModule
  ],
  providers: [SearchService]
})
export class SharedModule {
}