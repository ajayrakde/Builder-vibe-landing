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


## Saleor Sample Backend

A minimal Django-based GraphQL API is provided in the `saleor_backend/` folder. It exposes two fields — `hello` and `products` — and can be used as a starting point for integrating a Saleor backend.

### Running the Backend

```bash
cd saleor_backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open http://localhost:8000/graphql/ and run either the `hello` or `products` query to test the API.
