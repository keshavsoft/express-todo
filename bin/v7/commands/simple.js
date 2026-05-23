/*
bin/v5/commands/simple.js
*/

import { locateSource } from "./simple/steps/locateSource.js";
import { locateDestination } from "./simple/steps/locateDestination.js";
import { createProject } from "./simple/steps/createProject.js";
import { announce } from "./simple/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";
/**
 * @typedef {Object} simpleOptions
 * @property {string} folderName
 * @property {boolean} isAnnounce
 * @property {boolean} showLog
 */

/**
 * @param {simpleOptions} options
 */
export default ({
    folderName = "",
    isAnnounce = false,
    showLog = false,
    inProcessPath
}) => {

    if (showLog) {
        console.log("\n[1] Resolving folder name...");
    }

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (showLog) {
        console.log("✔ Folder name resolved");
        console.log(resolvedFolderName);
    }

    if (showLog) {
        console.log("\n[2] Locating source...");
    }

    const source = locateSource({
        showLog
    });

    if (showLog) {
        console.log("\n[3] Locating destination...");
    }

    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        showLog,
        inProcessPath
    });

    if (showLog) {
        console.log("\n[4] Creating project...");
    }

    createProject({
        source,
        destination,
        showLog
    });

    if (isAnnounce) {

        if (showLog) {
            console.log("\n[5] Announcing...");
        }

        announce({
            inResolvedFolderName: resolvedFolderName,
            showLog
        });
    }

    if (showLog) {
        console.log("\n✔ Command completed\n");
    };
};