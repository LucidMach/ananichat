import WebSocket from "ws";
import express from "express";

const app = express();

const wss = new WebSocket.Server({ noServer: true });

wss.on("connection", (ws: WebSocket) => {
  console.log("A New Client Connected");
});

const server = app.listen(5000, () =>
  console.log("🚀 at http://127.0.0.1:5000")
);

// upgrading from http/https => ws/wss
server.on("upgrade", (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (socket) => {
    wss.emit("connection", socket, req);
  });
});
