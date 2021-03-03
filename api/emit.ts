import PushNotifications from '@pusher/push-notifications-server'

const beamsClient = new PushNotifications({
  instanceId: process.env.PUSHER_BEAMS_INSTANCE_ID!,
  secretKey: process.env.PUSHER_BEAMS_SECRET!,
})

export const emitPechi = async (caller: string) => {
  await beamsClient.publishToInterests(['pechi'], {
    web: {
      notification: {
        title: 'ﾍﾟﾁﾍﾟﾁ',
        body: `${caller}さんがスス子をﾍﾟﾁﾍﾟﾁしました`,
      },
    },
  })
}
