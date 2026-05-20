import express from "../commands/express.js";

// resolveCommand.js
const map = {
    express
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};