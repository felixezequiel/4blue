"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const knex_1 = require("knex");
const knexfile_1 = require("../knexfile");
exports.db = (0, knex_1.default)(knexfile_1.configuration.development);
