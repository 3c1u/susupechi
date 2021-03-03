import express from 'express'
import PechiResponse from '~/type/PechiResponse'

const app = express().use((_req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.header('Pragma', 'no-cache')
  res.header('Expires', '0')
  next()
})

app.get('/pechi', (_req, res) => {
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
