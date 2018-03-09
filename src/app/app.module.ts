import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseconfig = {
  apiKey: "AIzaSyDPu_O02o7LUz7ZYMD6iDV5AhGbJeceOAI",
  authDomain: "firestarter-e0c8b.firebaseapp.com",
  databaseURL: "https://firestarter-e0c8b.firebaseio.com",
  projectId: "firestarter-e0c8b",
  storageBucket: "firestarter-e0c8b.appspot.com",
  messagingSenderId: "742163280072"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
