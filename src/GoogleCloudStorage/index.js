'use strict'

const { Storage } = require('@google-cloud/storage')

class GoogleCloudStorage {
  constructor(Config) {
    this.Config = Config.get(`gcloud.storage`)
    this.Storage = new Storage(this.Config)
  }

  async getSignedUrl(filename) {
    // These options will allow temporary read access to the file
    const options = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + this.Config.singledUrlExpirationTime, // one hour
    }

    const _ = await this.Storage.bucket(this.Config.bucket)
      .file(filename)
      .setMetadata({
        contentType: 'image/jpeg',
      })

    // Get a v4 signed URL for the file
    const [url] = await this.Storage.bucket(this.Config.bucket)
      .file(filename)
      .getSignedUrl(options)

    return url
  }
}

module.exports = GoogleCloudStorage
