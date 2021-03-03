import PusherClient from 'pusher-js'

const pusher = new PusherClient(process.env.PUSHER_KEY!, {
  cluster: process.env.PUSHER_CLUSTER!,
})

export default pusher
