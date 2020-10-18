'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')

/** @type {import('@adonisjs/lucid/src/Hash')} */
const Hash = use('Hash')

class UserSeeder {
  async run() {
    await Database.table('users').insert({
      username: 'admin',
      email: Env.get('DEFAULT_ADMIN_EMAIL', 'admin@admin.com'),
      password: await Hash.make(Env.get('DEFAULT_ADMIN_PASSWORD', 'admin')),
    })
  }
}

module.exports = UserSeeder
