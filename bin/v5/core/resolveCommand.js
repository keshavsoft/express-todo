import allVersions from "./getAllVersions.js";
console.log("allVersions : ", allVersions);

const resolveCommand = (cmd) => {
    return allVersions[cmd] || null;
};

export default resolveCommand;