/*
bin/v5/commands/simpleWithUi.js
*/

import { locateSource } from "./simpleWithUi/steps/locateSource.js";
import { locateDestination } from "./simpleWithUi/steps/locateDestination.js";
import { createProject } from "./simpleWithUi/steps/createProject.js";
import { announce } from "./simpleWithUi/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({
    folderName = "",
    isAnnounce = false,
    showLog = false
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
        showLog
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