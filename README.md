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

LOCAL_DATABASE_URL=postgres://postgres:postgress@localhost:5432/scello
DATABASE-URL=postgresql://postgres.pdzevovwkbldszognlex:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

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
JWT_SECRET=your_jwt_secret
\`\`\`

# Migrations

MIGRATION_ENV=render
MIGRATION_ENV=local

NODE_ENV=production
NODE_ENV=development

4. Start the server:
   \`\`\`bash
   npm run dev
   \`\`\`

## API Documentation

Access the Swagger documentation at \`http://localhost:3000/api-docs\`

## Database Schema

### Products Table

- id: INTEGER (Primary Key, Auto Increment)
- name: STRING (Not Null)
- price: DECIMAL(10,2) (Not Null)
- description: TEXT (Not Null)
- stockQuantity: INTEGER (Not Null)
- category: STRING (Not Null)
- createdAt: DATE

## Testing

Run the test suite:

\`\`\`bash
npm test
\`\`\`

## API Endpoints

- GET /api/products - Get all products (with pagination, filtering, and sorting)
- GET /api/products/:id - Get a single product
- POST /api/products - Create a new product (Admin only)
- PUT /api/products/:id - Update a product (Admin only)
- DELETE /api/products/:id - Delete a product (Admin only)

## Query Parameters

- page: Page number for pagination
- limit: Number of items per page
- category: Filter by category
- minPrice: Filter by minimum price
- maxPrice: Filter by maximum price
- search: Search products by name
- sortBy: Sort by field (price, name, stockQuantity)
- sortOrder: Sort order (ASC or DESC)
