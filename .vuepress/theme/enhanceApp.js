import { CarbonIconsVue } from '@carbon/icons-vue'
import Contrast from '@carbon/icons-vue/es/brightness-contrast/32'
import TIL from '@carbon/icons-vue/es/catalog/32'
import Location from '@carbon/icons-vue/es/location/32'
import Ascending from '@carbon/icons-vue/es/sort--ascending/32.js'
import Descending from '@carbon/icons-vue/es/sort--descending/32.js'
//sort--ascending/32.js
//sort--descending/32.js
import Vue from 'vue'

Vue.use(CarbonIconsVue, {
  components: {
    Contrast,
    TIL,
    Location,
    Ascending,
    Descending,
  },
})
