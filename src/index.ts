import { Module } from 'magnet-core/module'
import * as KeenTracking from 'keen-tracking'
import * as _promise from 'bluebird'

export default class MagnetKeenTracking extends Module {
  init () {
    this.moduleName = 'keen_tracking'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.insert(new KeenTracking(this.config))

    _promise.promisifyAll(this.app.keen_tracking)
  }
}
