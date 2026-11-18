# Inventory and Data Management System (Assignment 3)

RESTful backend built using **Node.js**, **Express.js**, **Mongoose**, and **dotenv** for managing a store/warehouse product catalogue.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/inventory_db
   ```
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products (supports filtering, sorting, and pagination)
- `GET /api/products/:id` - Get a single product by ID
- `PUT /api/products/:id` - Update product details
- `PATCH /api/products/:id/stock` - Adjust stock quantity (`{ "change": 10 }`)
- `DELETE /api/products/:id` - Delete a product
- `GET /api/products/low-stock` - Get low-stock alert report (`quantity <= reorderLevel`)
- `GET /api/products/summary` - Get category-wise inventory aggregation summary

## Postman Output Screenshots

*(Add your Postman test screenshots below before pushing to GitHub)*
