# 🚀 @keshavsoft-org/express-todo

Simple and powerful Express.js project generator.

Generate ready-to-run Express.js applications with a single command.

---

# ✨ Features

* Express.js boilerplate generation
* CRUD project generation
* UI project generation
* Tally server template
* Mail server template
* Price List project template
* Environment configuration support
* VS Code friendly structure
* Clean architecture
* Beginner friendly

---

# 📦 Requirements

Before using this package, make sure you have:

* Node.js >= 18
* npm >= 9

Check versions:

```bash
node -v
npm -v
```

---

# ⚡ Step 1 — Create a Project

Choose one of the available templates.

## Simple Project

```bash
npx @keshavsoft-org/express-todo simple
```

## CRUD Project

```bash
npx @keshavsoft-org/express-todo simpleWithCrud
```

## UI Project

```bash
npx @keshavsoft-org/express-todo simpleWithUi
```

## Tally Server

```bash
npx @keshavsoft-org/express-todo tallyServer
```

## Mail Server

```bash
npx @keshavsoft-org/express-todo withMail
```

## Price List Project

```bash
npx @keshavsoft-org/express-todo priceList
```

---

# ⚡ Step 2 — Open Generated Project

Move into the generated folder:

```bash
cd project-name
```

Example:

```bash
cd keshavsoft-basic-1781850868536
```

---

# ⚡ Step 3 — Install Dependencies

Install all required packages:

```bash
npm install
```

---

# ⚡ Step 4 — Verify Environment Files

Check:

```txt
.env
.env.local
```

Update values if required.

---

# ⚡ Step 5 — Start the Server

Run:

```bash
npm start
```

or

```bash
node server.js
```

---

# ⚡ Step 6 — Open Application

After starting the server, open:

```txt
http://localhost:3000
```

or the URL displayed in the terminal.

---

# 📁 Generated Project Structure

```txt
ProjectName
│
├── .vscode
├── Config
├── Public
│
├── .env
├── .env.local
│
├── app.js
├── config.json
├── configLoader.js
├── port.js
├── routes.js
├── server.js
│
├── package.json
└── package-lock.json
```

---

# 🛠 Available Commands

| Command        | Description                   |
| -------------- | ----------------------------- |
| simple         | Basic Express starter project |
| simpleWithCrud | CRUD-enabled project          |
| simpleWithUi   | UI-enabled project            |
| tallyServer    | Tally integration project     |
| withMail       | Mail-enabled server           |
| priceList      | Price List application        |

---

# 🎯 Development Workflow

```txt
Run NPX Command
        ↓
Generate Project
        ↓
Open Project Folder
        ↓
npm install
        ↓
npm start
        ↓
Open Browser
        ↓
Start Development
```

---

# 💡 Why Use This Package?

* Avoid repetitive setup
* Start projects quickly
* Maintain clean architecture
* Standardized folder structure
* Faster development workflow

---

# 📄 License

MIT