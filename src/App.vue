<template lang="pug">
v-app
  //- v-app-bar(color="primary")
  //-   v-app-bar-title 番茄鐘
  //-   v-spacer
  //-   v-btn(icon="mdi-home" variant="text" to="/")
  //-   v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
  //-   v-btn(icon="mdi-cog" variant="text" to="/settings")
  //-   v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  v-card
    v-layout
      v-navigation-drawer(expand-on-hover="" rail="")
        v-divider
        v-list(density="compact" nav="")
          //- v-list-item(prepend-icon="mdi-folder" title="My Files" value="myfiles")
          v-btn(icon="mdi-home" variant="text" to="/")
          v-divider
          //- v-list-item(prepend-icon="mdi-account-multiple" title="Shared with me" value="shared")
          v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
          v-divider
          //- v-list-item(prepend-icon="mdi-star" title="Starred" value="starred")
          v-btn(icon="mdi-cog" variant="text" to="/settings")
          v-divider
          v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
      v-main(style="height: 100vh; display: flex")
  v-main
    v-container
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
    v-footer(color="primary") 20221220 copyright

</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
</script>
