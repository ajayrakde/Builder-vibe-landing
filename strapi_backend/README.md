# Strapi Community Backend

This directory describes how to run a minimal Strapi instance to power community features such as posts and comments. It uses SQLite for storage by default.

## Running with Docker

The quickest way to start Strapi locally is with Docker:

```bash
docker run -p 1337:1337 strapi/strapi
```

On first run you will be guided through the Strapi setup wizard at `http://localhost:1337/admin/`.

## Manual Setup

Alternatively you can create a project using `npx`:

```bash
npx create-strapi-app community-backend --quickstart
```

This will launch Strapi and open the admin panel. Update the frontend configuration to call the API via `VITE_STRAPI_URL`.
