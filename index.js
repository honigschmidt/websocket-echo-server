import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", (ws) => {
    ws.send("Your are connected to the WebSocket echo server, awaiting data.");
    ws.on("message", (msg) => {
        ws.send(`${msg}`);
    })
})