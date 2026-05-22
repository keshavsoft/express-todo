import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "simpleWithUi";

const load = async () => {
    const v = getLatestVersion();

    return import(`../bin/${v}/commands/${commandToSend}.js`);
};

const startFunc = async () => {
    const { default: run } = await load();

    run({});
};

startFunc().then();