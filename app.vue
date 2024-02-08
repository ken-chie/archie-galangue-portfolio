<template>
  <div class="profile-page">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useImagesStore } from '@/stores/images'

const imageStore = useImagesStore()

onBeforeMount(() => {
  imageStore.setImages(import.meta.glob('@/assets/projects/*.png', { eager: true }))
})
</script>
