import * as functions from 'firebase-functions'

export interface EnvorinmentVariables {
  service_sampleA: {
    token: string
  },
  service_sampleB: {
    access: string,
    secret: string
  },
  service_sampleC: {
    indexprefix: string,
    id: string,
    key: string
  }
}

let config: any
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'test') {
  // FIXME: とりあえずdev環境をロード
  config = require('../env/dev.json')
} else {
  config = functions.config()
}

export const env = config as EnvorinmentVariables