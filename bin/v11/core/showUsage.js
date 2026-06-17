import allVersions from "./getAllVersions.js";

const g = "\x1b[32m";
const y = "\x1b[33m";
const c = "\x1b[36m";
const gray = "\x1b[90m";
const b = "\x1b[34m";
const r = "\x1b[0m";

const commands = () =>
    Object.keys(allVersions)
        .map(name => `  ${g}${name}${r}`)
        .join("\n");

const examples = () =>
    Object.keys(allVersions)
        .map(name => `  ${gray}npx @keshavsoft-org/express-todo ${name}${r}`)
        .join("\n");

const docs = () => `
${y}Docs:${r}
  ${b}https://keshavsoft.github.io/express-todo/${r}
`;

export default function showUsage(version) {

    console.log(`
${c}🚀 express-todo v${version}${r}

${y}Usage:${r}
  ${g}npx @keshavsoft-org/express-todo${r} <command>

${y}Commands:${r}
${commands()}

${y}Examples:${r}
${examples()}

${docs()}
`);
}