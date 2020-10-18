'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {
  static get computed() {
    return ['date', 'dateStr']
  }

  static get dates() {
    return super.dates.concat(['date'])
  }

  static boot() {
    super.boot()
    this.addTrait('NoTimestamp')
    this.addHook('afterPaginate', 'GcsHook.getSignedUrlPagination')
  }

  getDate() {
    return new Date()
  }

  getDateStr({ year, month, day, hour, minute, second }) {
    function pad(num) {
      var s = '000000000' + num
      return s.substr(s.length - 2)
    }
    return `${pad(month)}/${pad(day)}/${year} @ ${pad(hour)}:${pad(
      minute
    )}:${pad(second)}`
  }

  // getUrl(_) {
  //   return '#'
  // }
}

module.exports = Image
