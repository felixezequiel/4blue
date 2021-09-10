"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const routes_1 = require("./routes");
const port = 3030;
const app = express();
app.use(cors());
new routes_1.Routes(app);
app.listen(port, () => console.log('Server is running in port ' + port));