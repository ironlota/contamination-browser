'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'sqlite'),

  /*
  |--------------------------------------------------------------------------
  | Google Cloud Storage Configuration
  |--------------------------------------------------------------------------
  */
  storage: {
    /*
  |--------------------------------------------------------------------------
  | Credential Key Filename
  |--------------------------------------------------------------------------
  |
  | Get through the admin UI of Google Cloud
  |
  */
    keyFilename: Env.get('CREDENTIAL_FILE', './cert/credential.json'),
    /*
  |--------------------------------------------------------------------------
  | Bucket Name
  |--------------------------------------------------------------------------
  |
  | Bucket destination
  |
  */
    bucket: Env.get('BUCKET_NAME', 'mycelium-images'),
    /*
  |--------------------------------------------------------------------------
  | Signed URL Expiration Time
  |--------------------------------------------------------------------------
  |
  | Signed URL Expiration Time, default 15 minutes
  |
  */
    singledUrlExpirationTime: Env.get(
      'SIGNED_URL_EXPIRATION_TIME',
      1000 * 15 * 60
    ), // 15 minutes
  },
}
