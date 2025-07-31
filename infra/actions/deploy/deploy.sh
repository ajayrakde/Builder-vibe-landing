#!/usr/bin/env bash
set -euo pipefail

RG=$1
LOCATION=$2
ACR_NAME=$3
SWA_NAME=$4
ACI_NAME=$5
POSTGRES_NAME=$6
REDIS_NAME=$7

# Create resource group
az group create --name "$RG" --location "$LOCATION"

# Create container registry (if not exists)
az acr create --name "$ACR_NAME" --resource-group "$RG" --sku Basic --location "$LOCATION" --only-show-errors || true

# Create Static Web App (frontend)
az staticwebapp create --name "$SWA_NAME" --resource-group "$RG" --location "$LOCATION" --sku Free --no-wait

# Deploy container instance for backend
az container create --name "$ACI_NAME" --resource-group "$RG" \
  --image ${ACR_NAME}.azurecr.io/backend-image:v1 \
  --registry-login-server ${ACR_NAME}.azurecr.io \
  --cpu 1 --memory 2 --location "$LOCATION"

# Create PostgreSQL flexible server
az postgres flexible-server create --resource-group "$RG" --name "$POSTGRES_NAME" --location "$LOCATION" \
  --sku Standard_B1ms --version 14 --yes

# Create Redis cache
az redis create --name "$REDIS_NAME" --resource-group "$RG" --sku Basic --vm-size c1 --location "$LOCATION"


