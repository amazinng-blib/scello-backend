# E-Commerce Product API

A RESTful API for managing products in an e-commerce store built with Node.js, Express, TypeScript, and Sequelize.

## Features

- CRUD operations for products
- Pagination
- Search functionality
- Filtering by category and price range
- Sorting by various fields
- Authentication for admin endpoints
- Rate limiting
- Input validation
- Swagger/OpenAPI documentation

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Set up environment variables:
   \`\`\`

- # Clone

  - git clone {url}

  - # Install dependencies
  - npm install

  - # Set up environment variables

  LOCAL_DATABASE_URL=postgres://postgres:postgress@localhost:5432/scello  
   DATABASE-URL=postgresql://postgres.pdzevovwkbldszognlex:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

  PORT=6600

  ACCESS_TOKEN_SECRET=

  MIGRATION_ENV=superbase [remote]  
   MIGRATION_ENV=local [local]

  NODE_ENV=production  
   NODE_ENV=development

  DEV_DB_DIALECT=postgres  
   DEV_DB_USERNAME=postgres  
   DEV_DB_PASSWORD=postgress  
   DEV_DB_HOST=localhost  
   DEV_DB_USER=scello

  PROD_DB_DIALECT=postgres  
   PROD_DB_USERNAME=postgres  
   PROD_DB_USER=''  
   PROD_DB_PASSWORD=''  
   PROD_DB_HOST=''  
   PROD_DB_PORT=5432

## API Documentation

Access the Swagger documentation at \`${baseurl}/api-docs\`

## Database Schema

### Products Table

- id: INTEGER (Primary Key, Auto Increment)
- name: STRING (Not Null)
- price: DECIMAL(10,2) (Not Null)
- description: TEXT (Not Null)
- stockQuantity: INTEGER (Not Null)
- category: STRING (Not Null)
- createdAt: DATE

## API Endpoints

## baseurl = http://localhost:6600/api/v1

- GET ${baseurl}/products - Get all products (with pagination, filtering, and sorting)
- POST ${baseurl}/products/create-product - Create a new product (Admin only)
- PUT ${baseurl}/products/update-product?productId=${productId} - Update a product (Admin only)
- DELETE ${baseurl}/products?productId=${productId} - Delete a product (Admin only)

## Query Parameters

- page: Page number for pagination
- limit: Number of items per page
- category: Filter by category
- minPrice: Filter by minimum price
- maxPrice: Filter by maximum price
- search: Search products by name
- sortBy: Sort by field (price, name, stockQuantity)
- sortOrder: Sort order (ASC or DESC)

## Scripts

Start the server: npm run dev [development mode]  
start : npm run start [production mode]  
build : npm run build [for production]

# Migrations

## local

- Generate local migration : npm run migrate:generate ${name}
- Push migration to local db : npm run migrate:apply
- Revert most recent migration : npm run revert:recent:migration

## Remote

- Generate migration : npm run create:superbase:migration ${name}
- Apply migration : npm run superbase:apply
- Force apply migration : npm run superbase:force:apply
- Revert migration : npm run revert:superbase:migration
