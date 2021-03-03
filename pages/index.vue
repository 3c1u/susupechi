<template>
  <div class="index__main-content">
    <form class="index__form" @submit.prevent="performSubmit">
      <a-space align="center" direction="vertical">
        <h1>Susuko Pechi-pechi</h1>
        <p>Susuko wo pechi-pechi shiyou!</p>
        <p>{{ cluster }}</p>
        <a-space>
          <a-input
            ref="userNameInput"
            v-model="userName"
            placeholder="Your name"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
          <a-button type="primary" html-type="submit">ﾍﾟﾁﾍﾟﾁ</a-button>
        </a-space>
      </a-space>
    </form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'
import { notification } from 'ant-design-vue'
import { Channel } from 'pusher-js'
import pusher from '~/services/pusher'
import api from '~/services/api'
import PechiRequest from '~/type/PechiRequest'

export default defineComponent({
  setup() {
    const userName = ref('名無し')
    const channelRef = ref(null as Channel | null)
    const performSubmit = async () => {
      await api.postPechi({ caller: userName.value })
    }

    onMounted(() => {
      const channel = pusher.subscribe('susupechi')
      channel.bind('pechi', function ({ caller }: PechiRequest) {
        notification.open({
          message: 'ﾍﾟﾁﾍﾟﾁ',
          description: `${caller}さんがスス子をﾍﾟﾁﾍﾟﾁしました`,
        })
      })
      channelRef.value = channel
    })

    onBeforeUnmount(() => {
      channelRef.value?.unbind_all()
    })

    return { performSubmit, userName }
  },
})
</script>

<style lang="scss" scoped>
.index__main-content {
  padding: 4em 0;
  min-height: 100vh;
}

.index__form {
  display: flex;
  justify-content: center;
}
</style>
