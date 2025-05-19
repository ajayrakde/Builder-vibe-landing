#!/bin/bash

# Script to add copyright headers to all project files
# Run this from the project root directory

YEAR=$(date +"%Y")
COPYRIGHT_TEXT="/**\n * Copyright © $YEAR Kanhaa Baby. All rights reserved.\n * This file is part of the Kanhaa Baby website.\n * Unauthorized copying or redistribution of this file is strictly prohibited.\n */\n\n"

# Find all TypeScript and React files
TYPESCRIPT_FILES=$(find ./src -type f -name "*.ts" -o -name "*.tsx")

# Add copyright header to each file
for file in $TYPESCRIPT_FILES; do
  # Check if the copyright header already exists
  if ! grep -q "Copyright © $YEAR Kanhaa Baby" "$file"; then
    # Create a temporary file with the copyright header
    echo -e "$COPYRIGHT_TEXT$(cat $file)" > temp_file
    # Replace the original file with the temporary file
    mv temp_file "$file"
    echo "Added copyright header to $file"
  else
    echo "Copyright header already exists in $file"
  fi
done

# Find all CSS files
CSS_FILES=$(find ./src -type f -name "*.css")

# Add copyright header to each CSS file
for file in $CSS_FILES; do
  # Check if the copyright header already exists
  if ! grep -q "Copyright © $YEAR Kanhaa Baby" "$file"; then
    # Create a temporary file with the copyright header (CSS style)
    echo -e "/**\n * Copyright © $YEAR Kanhaa Baby. All rights reserved.\n * This file is part of the Kanhaa Baby website.\n * Unauthorized copying or redistribution of this file is strictly prohibited.\n */\n\n$(cat $file)" > temp_file
    # Replace the original file with the temporary file
    mv temp_file "$file"
    echo "Added copyright header to $file"
  else
    echo "Copyright header already exists in $file"
  fi
done

echo "Copyright headers added to all project files."
