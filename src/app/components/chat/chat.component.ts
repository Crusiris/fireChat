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
    this.chatservice.cargarMensajes().subscribe();
  }

  enviarm() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatservice
      .agregarMensaje(this.mensaje)
      .then(() => (this.mensaje = ""))
      .catch(err => console.error("Error al Enviar", err));
  }
}
