'use strict'

const GoogleCloudStorage = use('GoogleCloud/Storage')

const GcsHook = (exports = module.exports = {})

GcsHook.getSignedUrl = async (image) => {
  try {
    image.url = await GoogleCloudStorage.getSignedUrl(`${image.hash}.jpg`)
  } catch {
    image.url = '#error'
  }
}

GcsHook.getSignedUrlPagination = async (images, metadata) => {
  await Promise.all(
    images.map(async (image) => {
      try {
        image.url = await GoogleCloudStorage.getSignedUrl(`${image.hash}.jpg`)
      } catch {
        image.url = '#error'
      }

      return []
    })
  )
}
