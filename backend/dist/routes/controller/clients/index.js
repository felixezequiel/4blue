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
exports.ControllerClients = void 0;
const db = require('../../../../db');
exports.ControllerClients = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db('clients').select('*').where(req.query).catch(() => []);
            return res.status(200).json(response);
        });
    },
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db('clients').insert(req.body, 'id').catch(erro => ({ error: true, message: erro }));
            if (response.error)
                return res.status(404).json(response);
            return res.status(200).json({ id: response[0] });
        });
    },
    deleteClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db('clients').delete().where(req.params).catch(erro => ({ error: true, message: erro }));
            if (response.error)
                return res.status(400).json(response);
            return res.status(204).send();
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db('clients').update(req.body).where(req.params);
            return res.status(204).send();
        });
    }
};
