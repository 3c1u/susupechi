import * as PusherPushNotifications from '@pusher/push-notifications-web'

const beamsClient = new PusherPushNotifications.Client({
  instanceId: process.env.PUSHER_BEAMS_INSTANCE_ID!,
})

beamsClient.start().then(() => beamsClient.addDeviceInterest('pechi'))
