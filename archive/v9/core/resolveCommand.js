import allVersions from "./getAllVersions.js";

const resolveCommand = (cmd) => {
    return allVersions[cmd] || null;
};

export default resolveCommand;