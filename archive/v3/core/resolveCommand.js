import simple from "../commands/simple.js";

// resolveCommand.js
const map = {
    simple
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};