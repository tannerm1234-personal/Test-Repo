#!/bin/bash

# Clean npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# Install dependencies with force flag
npm install --force

# Build the project
npm run build
