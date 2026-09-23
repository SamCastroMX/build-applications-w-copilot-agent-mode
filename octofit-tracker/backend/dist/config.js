"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiBaseUrl = void 0;
const apiPort = 8000;
exports.apiBaseUrl = process.env.CODESPACE_NAME
    ? `https://${process.env.CODESPACE_NAME}-${apiPort}.app.github.dev`
    : `http://localhost:${apiPort}`;
