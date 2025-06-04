# Deploying to Azure Static Web Apps

This guide shows how to publish the Vite React project as an Azure Static Web App.

## Prerequisites

- An Azure account
- Node.js and npm installed
- The [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) with the `azure-dev` extension (optional)

## Steps

1. **Fork or clone this repository** into your own GitHub account.
2. **Create a Static Web App** in the Azure portal. Select GitHub as the deployment source and authorize your repository.
3. **Configure build details** when prompted:
   - **App location**: `/` (root)
   - **Api location**: (leave blank)
   - **Output location**: `dist`
   - **Build command**: `npm run build`
4. Azure will generate a workflow file in `.github/workflows` and start the first deployment.
5. Each push to the configured branch will trigger a new build and deploy the latest version.

### Manual Deployment

If you prefer to build locally and upload the assets manually:

```bash
npm run build
az staticwebapp upload --name <APP_NAME> --resource-group <RESOURCE_GROUP> --source dist
```


### Sample Terraform

Below is a minimal Terraform configuration that creates an Azure Static Web App and uploads the `dist/` folder.

```hcl
resource "azurerm_resource_group" "example" {
  name     = "my-swa-rg"
  location = "East US"
}

resource "azurerm_static_site" "example" {
  name                = "my-static-app"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  sku_tier            = "Free"
  sku_size            = "Free"
}
```

Apply the configuration with:

```bash
terraform init
terraform apply
```

This creates the Static Web App resource. You can then configure your CI workflow to deploy the `dist/` folder after running `npm run build`.

### Sample GitHub Actions Workflow

The following YAML shows how to build and deploy the app whenever you push to `main`:

```yaml
name: Deploy to Azure Static Web Apps

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"
```

