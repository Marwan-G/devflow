
# ESLint and Prettier Setup Guide

This guide will walk you through setting up ESLint with Standard configuration, Prettier integration, and Tailwind CSS support. Follow each step to ensure your project is configured correctly.

## Steps

### 1. Install Required Packages

Run the following commands to install necessary packages:

```bash
npm install eslint-config-standard
npm install eslint-plugin-tailwindcss
npm install eslint-config-prettier
npm install prettier
```

### 2. Update `.eslintrc.json` Configuration

Copy the `.eslintrc.json` configuration provided below into your project’s `.eslintrc.json` file to set up the linting rules.

```json
{
  // Paste the provided .eslintrc.json content here
}
```

### 3. Create `.vscode/settings.json`

In the root directory of your project, create a new folder `.vscode`, and inside it, create a `settings.json` file. Paste the provided `settings.json` content into this file:

```json
{
  // Paste the provided settings.json content here
}
```

### 4. Install Required Extensions in VS Code

Ensure you have the following extensions installed in Visual Studio Code:

- **ESLint** by Microsoft
- **Prettier - Code formatter** by Prettier
- **Prettier ESLint** by Rebecca Vest

These extensions will enhance the integration of ESLint and Prettier in your editor.

### 5. Install Additional Package for ESLint

Install the `eslint-plugin-import` package:

```bash
npm install eslint-plugin-import --save-dev
```

### 6. Reload and Restart in VS Code

After setting up, reload and restart ESLint in VS Code by pressing:

- `CTRL + SHIFT + P`
- Type **Reload Window** and press Enter
- Type **Restart ESLint Server** and press Enter

### 7. Commit and Push to GitHub

Once everything is set up and working, commit your changes and push them to GitHub:

```bash
git add .
git commit -m "Setup ESLint, Prettier, and Tailwind CSS integration"
git push origin main
```

---

Your project is now configured with ESLint, Prettier, and Tailwind CSS linting support. Enjoy clean, consistent code!
