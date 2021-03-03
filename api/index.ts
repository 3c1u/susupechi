import express from 'express'
import pusher from './pusher'
import { emitPechi } from './emit'
import PechiResponse from '~/type/PechiResponse'
import PechiRequest from '~/type/PechiRequest'

const app = express()
  .use((_req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.header('Pragma', 'no-cache')
    res.header('Expires', '0')
    next()
  })
  .use(express.json())

app.post('/pechi', (req, res) => {
  const { caller } = req.body as PechiRequest
  pusher.trigger('susupechi', 'pechi', {
    caller,
  })
  emitPechi(caller)

  res.statusCode = 200
  res.send(
    JSON.stringify({
      pechi: 'ﾍﾟﾁﾍﾟﾁﾍﾟﾁﾍﾟﾁﾍﾟﾁﾍﾟﾁﾍﾟﾁﾍﾟﾁ！！！！！！！！！！！！！！！',
    } as PechiResponse)
  )
})

export default {
  path: '/api',
  handler: app,
}
