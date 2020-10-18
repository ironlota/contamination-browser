'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {import('@adonisjs/lucid/src/Hash')} */
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
  }
})

Factory.blueprint('App/Models/Image', async (faker) => {
  const date = faker.date()
  return {
    hash: faker.guid(),
    taken_at: date,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    sku_card: faker.pickone([
      'Colonize',
      'TEND',
      'ExposeFlip',
      'FlipNylonFlip',
      'TendFlipFlipCompFlip',
      'FlipTend',
      'HarvestBed',
      'NOT_USED',
    ]),
    sku_number: faker.pickone([
      'REGEN',
      'ESKIMO',
      'TIGER',
      'SAPIEN',
      'NOT_USED',
    ]),
    sku_prod_day: faker.integer({ min: 1, max: 20 }),
    tray_barcode: faker.integer({ min: 1000000, max: 2000000 }),
    lid_barcode: faker.string({ length: 10 }),
    batch_id: faker.integer({ min: 1, max: 10000 }),
    infection: faker.pickone([
      'NONE',
      'BLUE/GREEN',
      'BLACK/BROWN',
      'METABOLITE',
      'NOT_USED',
    ]),
  }
})
