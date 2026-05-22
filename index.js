import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};

export const express = async (...a) =>
    (await load("express"))(...a);

export const simpleWithUi = async (...a) =>
    (await load("simpleWithUi"))(...a);

export const simpleWithCrud = async (...a) =>
    (await load("simpleWithCrud"))(...a);