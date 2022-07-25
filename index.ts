import WebSocket from "ws";
import express from "express";

const app = express();

const wss = new WebSocket.Server({ noServer: true });

wss.on("connection", (ws: WebSocket) => {
  console.log("new client connected");

  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      client.send(data.toString());
    });
  });
  ws.on("close", () => {
    console.log("client disconnected");
  });
});

const server = app.listen(process.env.PORT || 5000, () =>
  console.log("🚀 at http://127.0.0.1:5000")
);

// upgrading from http/https => ws/wss
server.on("upgrade", (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (socket) => {
    wss.emit("connection", socket, req);
  });
});
