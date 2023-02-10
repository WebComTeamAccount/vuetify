import Vue from 'vue'

import { install } from '@webcomputing/vuetify/es5/install'
import VBtn from '@webcomputing/vuetify/es5/components/VBtn'
import * as VCard from '@webcomputing/vuetify/es5/components/VCard'
import { Ripple } from '@webcomputing/vuetify/es5/directives'
import * as directives from '@webcomputing/vuetify/es5/directives'

install(Vue, {
  components: {
    VBtn,
    ...VCard
  },
  directives: {
    ...directives
  }
})

Vue.extend({
  components: {
    VBtn,
    ...VCard
  },
  directives: {
    Ripple
  }
})

VBtn.extend()

Vue.extend({
  extends: VBtn,
})
