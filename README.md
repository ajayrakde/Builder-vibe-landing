# Builder Vibe Landing

This repository contains a React application bootstrapped with Vite.

## Getting Started

Follow these steps to run the app locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Builder-vibe-landing
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app should be available at http://localhost:8080.

## Building for Production

Create an optimized build with:

```bash
npm run build
```

The static files will be generated in the `dist/` directory. You can preview the build locally with:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Deploying

Deploy the contents of the `dist/` folder to your static hosting provider of choice.


## Using Saleor

The frontend expects a Saleor GraphQL API. You can run Saleor locally using Docker:

```bash
git clone https://github.com/saleor/saleor.git
cd saleor
docker compose up
```

Once the containers are running, the GraphQL endpoint will be available at
`http://localhost:8000/graphql/`. Set this URL in a `.env` file at the project
root so Vite can access it:

```bash
VITE_SALEOR_API_URL=http://localhost:8000/graphql/
```

The React app will fetch products and product details from this API. Saleor exposes GraphQL mutations for authentication such as `tokenAuth` and `accountRegister`, so you can manage accounts without additional services.

### Community Backend

Community features like posts and comments rely on a Strapi instance. See `strapi_backend/README.md` for setup instructions. Set `VITE_STRAPI_URL` to point to the running Strapi API.
