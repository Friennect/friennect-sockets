const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server, { origins: "*" });
const rp = require("request-promise");

io.on("connection", (socket) => {
  socket.on("TYPING", async (data) => {
    const { token, recipient } = data;
    const _request = await rp.get("", {});
    const _user = _request.body;
    io.emit(`IS_TYPING:${recipient}:${token}`);
  });
});

server.listen();
