/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable(
    'products',
    {
      id: {
        type: 'serial',
        primaryKey: true,
      },

      creator: {
        type: 'integer',
        notNull: true,
        references: 'users(id)',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      name: {
        type: 'varchar(255)',
        notNull: true,
      },
      price: {
        type: 'integer',
        notNull: true,
      },
      description: {
        type: 'text',
        notNull: true,
      },
      stockQuantity: {
        type: 'integer',
        notNull: true,
      },

      category: {
        type: 'varchar(255)',
        notNull: true,
      },
      createdAt: {
        type: 'timestamp',
        default: pgm.func('current_timestamp'),
      },
    },
    {
      ifNotExists: true,
    }
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('products');
};
