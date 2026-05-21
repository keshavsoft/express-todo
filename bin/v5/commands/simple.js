import { locateSource } from "./simple/steps/locateSource.js";
import { locateDestination } from "./simple/steps/locateDestination.js";
import { createProject } from "./simple/steps/createProject.js";
import { announce } from "./simple/steps/announce.js";

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