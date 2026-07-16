import { labManagement } from "../../index.js";

const startFunc = () => {

    const folderName = process.argv[2];

    // const { default: run } = labManagement({
    //     folderName
    // });

    labManagement({
        folderName
    });
};

startFunc();