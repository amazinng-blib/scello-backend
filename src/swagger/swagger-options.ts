import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Product API Test',
      description:
        'API documentation for the Product API by NWANKWO ERNEST(fullstack developer)',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:6600/api/v1',
        description: 'Local server',
      },
      {
        url: 'https://scello-backend.onrender.com/api/v1',
        description: 'remote server',
      },
    ],
    paths: {
      '/products': {
        get: {
          summary: 'Get all products',
          responses: {
            '200': {
              description: 'List of products',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Product',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/products/create-product': {
        post: {
          summary: 'Create a new product',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      example: 'Laptop',
                    },
                    price: {
                      type: 'number',
                      example: 1000.0,
                    },
                    description: {
                      type: 'string',
                      example: 'A high-performance laptop',
                    },
                    stockQuantity: {
                      type: 'integer',
                      example: 50,
                    },
                    category: {
                      type: 'string',
                      example: 'Electronics',
                    },
                  },
                  required: [
                    'name',
                    'price',
                    'description',
                    'stockQuantity',
                    'category',
                  ],
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Product created',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
          },
        },
      },
      '/products/update-product': {
        put: {
          summary: 'Update an existing product',
          parameters: [
            {
              name: 'productId',
              in: 'query',
              required: true,
              schema: {
                type: 'integer',
                example: 1,
              },
              description: 'ID of the product to update',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Product updated successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
            '400': {
              description: 'Invalid input',
            },
            '404': {
              description: 'Product not found',
            },
            '500': {
              description: 'Internal server error',
            },
          },
        },
      },

      '/products/delete-product': {
        delete: {
          summary: 'Delete a product',
          parameters: [
            {
              name: 'productId',
              in: 'query',
              required: true,
              schema: {
                type: 'integer',
                example: 1,
              },
              description: 'ID of the product to delete',
            },
          ],
          responses: {
            '200': {
              description: 'Product deleted successfully',
            },
            '404': {
              description: 'Product not found',
            },
            '500': {
              description: 'Internal server error',
            },
          },
        },
      },
      '/users/register': {
        post: {
          summary: 'Register a new user',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    firstName: {
                      type: 'string',
                      example: 'Ernest',
                    },
                    lastName: {
                      type: 'string',
                      example: 'Nwankwo',
                    },
                    email: {
                      type: 'string',
                      example: 'admin@gmail.com',
                    },
                    password: {
                      type: 'string',
                      example: 'Admin$$2020',
                    },
                  },
                  required: ['firstName', 'lastName', 'email', 'password'],
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'User created successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
            '400': {
              description: 'User already exists',
            },
            '500': {
              description: 'Internal server error',
            },
          },
        },
      },
      '/users/login': {
        post: {
          summary: 'Login a user and generate a token',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      example: 'admin@gmail.com',
                    },
                    password: {
                      type: 'string',
                      example: 'Admin$2020',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Login successful',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      accessToken: {
                        type: 'string',
                        example:
                          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM3OTc1MTczLCJleHAiOjE3Mzg1Nzk5NzN9.a57LIF7oG_yFm87eZg9R6jqt4dmXeDyUKMd1eGl2Iz4',
                      },
                    },
                  },
                },
              },
            },
            '401': {
              description: 'Invalid credentials',
            },
            '404': {
              description: 'User not found',
            },
            '500': {
              description: 'Internal server error',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
              description: 'Auto-generated ID',
            },
            name: {
              type: 'string',
              example: 'Laptop',
            },
            price: {
              type: 'number',
              example: 1000.0,
            },
            description: {
              type: 'string',
              example: 'A high-performance laptop',
            },
            stockQuantity: {
              type: 'integer',
              example: 50,
            },
            category: {
              type: 'string',
              example: 'Electronics',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-01-01T00:00:00Z',
              description: 'Auto-generated timestamp',
            },
          },
          required: [
            'name',
            'price',
            'description',
            'stockQuantity',
            'category',
          ],
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
              description: 'Auto-generated ID',
            },
            firstName: {
              type: 'string',
              example: 'Ernest',
            },
            lastName: {
              type: 'string',
              example: 'Nwankwo',
            },
            email: {
              type: 'string',
              example: 'admin@gmail.com',
            },
            password: {
              type: 'string',
              example: 'Admin$$2020',
            },
            role: {
              type: 'string',
              example: 'USER',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-01-01T00:00:00Z',
              description: 'Auto-generated timestamp',
            },
          },
          required: ['firstName', 'lastName', 'email', 'password', 'role'],
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};
