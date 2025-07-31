# Builder Vibe Landing

Builder Vibe Landing is a demo e‑commerce front end built with **React**, **TypeScript** and **Vite**. It showcases a catalog, blog pages, a shopping cart and checkout flow styled with Tailwind and shadcn‑ui components.

## Features

- Modern React application using Vite for fast builds and HMR
- TypeScript for type safety
- Tailwind CSS and shadcn‑ui for styling
- Routing with React Router
- Mock catalog and blog pages that can be wired to a backend
- Example shopping cart and checkout screens

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- [nvm](https://github.com/nvm-sh/nvm) is recommended to manage Node versions

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Builder-vibe-landing
npm install
```

Copy `.env.example` to `.env.local` and fill in any required environment variables:

```bash
cp .env.example .env.local
```

### Running Locally

Start the development server on port `8080`:

```bash
npm run dev
```

Open `http://localhost:8080` in your browser to view the app.

### Building for Production

Generate an optimized build in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Deployment

The project includes a GitHub Action that provisions Azure resources and deploys the front end to Azure Static Web Apps. See the [Deployment Runbook](RUNBOOK.md) for detailed steps.

## Repository Structure

- `src/` – Application source code
- `public/` – Static assets served as‑is
- `infra/` – Reusable GitHub Action for Azure infrastructure
- `.github/workflows/` – CI workflows

## License

See [copyright-notice.md](copyright-notice.md) for licensing information.

