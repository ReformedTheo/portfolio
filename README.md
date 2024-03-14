# Portfolio Website

This repository contains the code for my personal portfolio website. It includes a Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions.

## Disclaimer

Please note that I am not a frontend developer. This website serves as a personal project and a means to learn and experiment with web development technologies.

## CI/CD Pipeline

The CI/CD pipeline is defined in the `.github/workflows/nodejs.yml` file and consists of several key steps:

### Triggers

- **Push**: The pipeline is triggered on every push to the `master` branch.
- **Pull Request**: Any pull request targeting the `master` branch will also trigger the pipeline.

### Jobs

The pipeline consists of a single job named `build`, which is executed on the latest Ubuntu virtual environment provided by GitHub Actions.

### Steps

1. **Checkout**: The pipeline checks out the source code for the latest commit on the `master` branch or within a pull request.

2. **Node.js Setup**: It sets up the Node.js environment, using the version specified in the matrix (18.x as of the current setup).

3. **Cache Dependencies**: The pipeline caches the `node_modules` directory to speed up the installation of dependencies in subsequent runs.

4. **Install Dependencies**: It performs a clean install of the Node.js dependencies using `npm ci`.

5. **Build**: The source code is then built using `npm run build`, creating a production build of the website.

6. **Test**: Runs any tests associated with the project using `npm test`.

7. **Deploy**: If all previous steps are successful, the pipeline deploys the build to GitHub Pages using the `gh-pages` package. The `GITHUB_TOKEN` secret is used for authentication with GitHub.

### Environment Variables

- `GITHUB_TOKEN`: A GitHub Actions provided secret used to authenticate against the GitHub repository to allow pushing the build artifacts to the `gh-pages` branch.

## Local Development

For setting up the project locally, you need to have Node.js installed. After cloning the repository, install dependencies with:

\```sh
npm install
\```

To start the development server, run:

\```sh
npm start
\```

To create a production build, use:

\```sh
npm run build
\```

## Deployment

To manually deploy the website to GitHub Pages, run:

\```sh
npm run deploy
\```

Ensure you have set up your `package.json` with the correct `homepage` URL and that you have the necessary permissions to push to the repository.

---

This CI/CD pipeline ensures that every change is automatically built, tested, and deployed, streamlining the development process and keeping the live site up-to-date with the latest changes in the repository.