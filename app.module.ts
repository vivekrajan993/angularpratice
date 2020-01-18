import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WriterComponent } from './writer/writer.component';
import { BookDirective } from './book.directive';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { CityComponent } from './city/city.component';
import { AddressComponent } from './address/address.component';
import { FavouriteCitiesComponent } from './favourite-cities/favourite-cities.component';
import { FriendComponent } from './friend/friend.component';
import { FavouriteFriendsComponent } from './favourite-friends/favourite-friends.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    WriterComponent,
    BookDirective,
    FavouriteBooksComponent,
    CityComponent,
    AddressComponent,
    FavouriteCitiesComponent,
    FriendComponent,
    FavouriteFriendsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
