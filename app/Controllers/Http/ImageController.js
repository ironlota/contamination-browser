'use strict'

/** @type {import('@adonisjs/lucid/src/Database')} */
// const Database = use('Database')

const Logger = use('Logger')

const Image = use('App/Models/Image')

class ImageController {
  async index({ auth, view, params, request }) {
    try {
      await auth.check()

      if (typeof params.page === 'undefined') {
        params = { ...params, page: 1 }
      }

      let limit = 10
      const query = request.get()
      if (typeof query.limit !== 'undefined') {
        limit = query.limit
      }

      /**
       * Fetch all images inside our database.
       *
       * ref: http://adonisjs.com/docs/4.1/lucid#_all
       */
      const images = await Image.query()
        // .select('*')
        // .raw(
        //   'select *, make_timestamp(year,month,day,hour,minute,second) as ts from images'
        // )
        .orderBy('taken_at', 'desc')
        .paginate(params.page, limit)

      /**
       * Render the view 'images.index'
       * with the posts fetched as data.
       *
       * ref: http://adonisjs.com/docs/4.1/views
       */
      return view.render('images.index', { images: images.toJSON() })
    } catch (error) {
      Logger.error(error)
      return view.render('images.index', { images: { total: 0 } })
    }
  }
}

module.exports = ImageController
