# Workflow repo CA

This repository is a fork of the Noroff Workflow Course Assignment project. The purpose of this project is to apply workflow best practices, including code quality tooling, automated testing and a structured GitHub pull request workflow.

## Getting Started

### Install Dependencies

- `npm install`

### Running the Project

Start the local development server:

- `npm run start`

- Note: Keep this terminal open. For Playwright end-to-end tests, the server must be running in a separate terminal.

### Running Tests

### Unit Tests (Vitest)

Run unit tests:

- `npm run test`

Unit tests cover:

- isActivePath
- getUsername

### End-to-End Tests (Playwright)

After starting the server, open a new terminal and run:

- `npm run test:e2e` # Headless mode

Run tests with the browser visible:

- `npm run test:e2e:headed` # Browser mode

View the Playwright HTML report:

- `npx playwright show-report`

End-to-End tests cover:

- Login with valid credentials
- Login error with invalid credentials
- Navigation from home page to venue details page

### Environment Variables

This project uses environment variables. Create a .env file in the root of your project with the following format:

TEST_USER_EMAIL=
TEST_USER_PASSWORD=

An example file is provided as .env.example

### Available Scripts

- `npm run start` - Start the local development server
- `npm run test` - Run unit tests with Vitest
- `npm run test:e2e` - Run Playwright end-to-end test
- `npm run test:e2e:headed` - Run Playwright tests with browser UI
- `npm run test:e2e:ui` - Open Playwright test UI
- `npm run test:e2e:debug` - Run Playwright tests in debug mode

### Linting, Formatting and Git Hooks

This project uses the following tools to maintain code quality:

- #### ESLint - JavaScript linting
- #### Prettier - Code formatting
- #### Husky - Git hooks
- #### lint-staged - Run linting and formatting on staged files before commits

### Pre-commit Hooks

Before each commit

- JavaScript files are linted and auto-fixed using ESLint
- JavaScript, CSS and Markdown files are formatted using Prettier

This ensures consistent code quality and prevents committing broken or unformatted code.

### Technologies Used

- JavaScript
- HTML
- CSS
- Vitest
- Playwright
- ESLint
- Prettier
- Husky
- lint-staged

### Git Workflow

All development work is done in the workflow branch and merged via pull requests.

### Author

CamiP89
