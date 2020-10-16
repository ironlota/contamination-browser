const { ServiceProvider } = require('@adonisjs/fold')

class GoogleCloudStorageProvider extends ServiceProvider {
  register() {
    this.app.singleton('GoogleCloud/Storage', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('../src/GoogleCloudStorage'))(Config)
    })
  }
}

module.exports = GoogleCloudStorageProvider
