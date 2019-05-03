import { Component } from "@angular/core";
import { ChatService } from "../../providers/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: []
})
export class ChatComponent {
  mensaje: string = "";

  constructor(public chatservice: ChatService) {
    this.chatservice.cargarMensajes().subscribe((mensajes: any[]) => {
      console.log(mensajes);
    });
  }

  enviarm() {
    console.log(this.mensaje);
  }
}
