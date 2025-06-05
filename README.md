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

A Django-based GraphQL API is provided in the `saleor_backend/` folder. It now includes the standard Django admin panel so you can manage products, categories and orders.

### Running the Backend

```bash
cd saleor_backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # follow the prompts
python manage.py runserver
```

Log in at http://localhost:8000/admin/ to add products. GraphQL queries (such as `hello` or `products`) can be executed at http://localhost:8000/graphql/.
See `saleor_backend/API_README.md` for a list of available queries and mutations and how they map to the frontend.
