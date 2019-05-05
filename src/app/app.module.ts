import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";

//Servicios
import { ChatService } from "./providers/chat.service";

//Componentes
import { ChatComponent } from "./components/chat/chat.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
