exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('password').notNullable()
      table.string('role')
      table.timestamps()
    }),

    knex.schema.createTable('messages', table => {
      table.increments('id').primary()
      table.timestamps()
    }),
])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('messages'),
  ])
};
