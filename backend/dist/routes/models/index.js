"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Models = void 0;
const db = require('../../../db');
exports.Models = {
    select(req, res, _, table) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield db(table).select('*').where(req.query).catch(() => []);
            if (table === 'clients') {
                response = response.map(client => {
                    let year = new Date().getFullYear() - new Date(client.date_of_birth).getFullYear();
                    if ((new Date().getMonth() + 1) <= (new Date(client.date_of_birth).getMonth() + 1) &&
                        (new Date().getDate()) < (new Date(client.date_of_birth).getDate()))
                        year--;
                    client.age = year;
                    return client;
                });
            }
            return res.status(200).json(response);
        });
    },
    update(req, res, _, table) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db(table).update(req.body).where(req.params).catch(erro => erro);
            return res.status(204).send();
        });
    },
    delete(req, res, _, table) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db(table).delete().where(req.params).catch(erro => ({ error: true, message: erro }));
            if (response.error)
                return res.status(400).json(response);
            return res.status(204).send();
        });
    },
    insert(req, res, _, table) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db(table).insert(req.body, 'id').catch(erro => ({ error: true, message: erro }));
            if (response.error)
                return res.status(404).json(response);
            return res.status(200).json({ id: response[0] });
        });
    }
};
