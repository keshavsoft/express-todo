import path from "path";

export const locateDestination = ({ inResolvedFolderName,
    inProcessPath = process.cwd() }) => {

    return path.join(inProcessPath, inResolvedFolderName);
};