const buildHeader = async () => {
    const fromFetch = await fetch("./Index/headers.json");
    const headerConfig = await fromFetch.json();

    // await initHeader(headerConfig);

    await window.KSHeader(headerConfig);
    // callKSHeader(headerConfig).then();
};

export { buildHeader };