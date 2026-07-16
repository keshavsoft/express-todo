import getLatestVersion from "./bin/core/getLatestVersion.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};

export const simple = async (...a) =>
    (await load("simple"))(...a);

export const simpleWithUi = async (...a) =>
    (await load("simpleWithUi"))(...a);

export const simpleWithCrud = async (...a) =>
    (await load("simpleWithCrud"))(...a);

export const priceList = async (...a) =>
    (await load("priceList"))(...a);

export const withMail = async (...a) =>
    (await load("withMail"))(...a);

export const tallyServer = async (...a) =>
    (await load("tallyServer"))(...a);

// export const labManagement = async (...a) =>
//     (await load("labMan"))(...a);

export const labManagement = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/commands/labManagement.js`);

    return mod.default(options);
};