/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
exports.up = (pgm) => {
  // Create ENUM for role
  pgm.createType('enum_user_role', ['ADMIN', 'USER', 'MARKETER']);
  pgm.createTable(
    'users',
    {
      id: {
        type: 'serial',
        primaryKey: true,
      },
      firstName: {
        type: 'varchar(255)',
        notNull: true,
      },
      lastName: {
        type: 'varchar(255)',
        notNull: true,
      },
      email: {
        type: 'varchar(255)',
        notNull: true,
        unique: true,
      },
      password: {
        type: 'varchar(255)',
        notNull: true,
      },
      role: {
        type: 'enum_user_role',
        notNull: true,
        default: 'USER',
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

exports.down = (pgm) => {
  // Drop table first since it depends on the enum type
  pgm.dropTable('users');

  // Drop ENUM for role
  pgm.dropType('enum_user_role');
};
