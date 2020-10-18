'use strict'

/*
|--------------------------------------------------------------------------
| ImageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')

class ImageSeeder {
  async run() {
    await Factory.model('App/Models/Image').createMany(50)
  }
}

module.exports = ImageSeeder
