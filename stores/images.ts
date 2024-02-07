import { defineStore } from 'pinia'
import { filename } from 'pathe/utils'

export const useImagesStore = defineStore('static_images', {
  state: () => ({ images: null as null | object }),
  getters: {
    getImages: (state) => {
      return state.images
    }
  },
  actions: {
    setImages (glob: object) {
      this.images = ref(Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default])))
      console.log('Set Images: ', this.images)
    }
  }
})
