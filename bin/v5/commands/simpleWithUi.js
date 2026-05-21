import { locateSource } from "./simpleWithUi/steps/locateSource.js";
import { locateDestination } from "./simpleWithUi/steps/locateDestination.js";
import { createProject } from "./simpleWithUi/steps/createProject.js";
import { announce } from "./simpleWithUi/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({ folderName = "" }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    announce({ inResolvedFolderName: resolvedFolderName });
};