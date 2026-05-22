import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "simpleWithUi";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(`../bin/${v}/commands/${commandToSend}.js`)).default;
};

const startFunc = async () => {
    await load({});
};

startFunc().then();