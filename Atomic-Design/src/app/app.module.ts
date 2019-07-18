import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atomic/atoms/button/button.component';
import { TextComponent } from './atomic/atoms/text/text.component';
import { HeaderComponent } from './atomic/atoms/header/header.component';
import { ImageComponent } from './atomic/atoms/image/image.component';
import { SearchComponent } from './atomic/molecules/search/search.component';
import { InputComponent } from './atomic/atoms/input/input.component';

import { IconBookmarkComponent } from './atomic/atoms/icon/icon-bookmark/icon-bookmark.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconAdressbookComponent } from './atomic/atoms/icon/icon-adressbook/icon-adressbook.component';
import { IconInformationComponent } from './atomic/atoms/icon/icon-information/icon-information.component';
import { CardComponent } from './atomic/molecules/card/card.component';
import { ParagraphComponent } from './atomic/atoms/paragraph/paragraph.component';
import { GridcardsComponent } from './atomic/organisms/gridcards/gridcards.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
    ImageComponent,
    HeaderComponent,
    SearchComponent,
    InputComponent,
    IconBookmarkComponent,
    IconAdressbookComponent,
    IconInformationComponent,
    CardComponent,
    ParagraphComponent,
    GridcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
