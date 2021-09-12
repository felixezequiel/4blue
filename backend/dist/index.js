"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express = require("express");
const cors = require("cors");
const index_js_1 = require("./routes/index.js");
const app = express();
const http = require("http");
const index_js_2 = require("./socket/routes/index.js");
const server = http.createServer(app);
const socket = require("socket.io");
const port = 3030;
app.use(cors({
    methods: '*',
    origin: '*'
}));
app.use(express.json());
exports.io = new socket.Server(3031, { cors: { methods: ['GET', 'POST'] } });
new index_js_2.RoutesSocket(exports.io);
new index_js_1.Routes(app);
app.listen(port, () => console.log('Server is running in port ' + port));
