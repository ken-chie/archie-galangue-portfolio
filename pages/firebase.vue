<template>
  <div class="container text-5xl">
    Firebase
    <div class="flex gap-2">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue"
  import { initializeApp } from "firebase/app"
  import { getMessaging, getToken } from 'firebase/messaging'
  
  // const messaging = ref(null)
  const token = ref(null)

  // Your web app's Firebase configuration
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBtKRK3F1f8LEODkLoyaujmRHfmN28Rdzc",
    authDomain: "eamon-project.firebaseapp.com",
    projectId: "eamon-project",
    storageBucket: "eamon-project.appspot.com",
    messagingSenderId: "44034248528",
    appId: "1:440342485282:web:d17fd1bb70c0031c9a2d7b"
  }

  onMounted(async () => {
    const app = initializeApp(FIREBASE_CONFIG)
    const messaging = getMessaging(app)

    const permissionGranted = requestNotificationPermission()
    if (!permissionGranted) {
      return
    }
    // token.value = await messaging.value.getToken()
    console.log('Token: ', await getToken(messaging, { vapidKey: 'BEjZqeH0zwtqEtEFTNc7aRtxYAE7cXJXZtBUsbYUv8IzwBDuSsqFtVnXcATNglm0i4wtyzLbWQKkaoP9sAKGeGk' }))
  })

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Error requesting permission:', error)
      return false
    }
  }
</script>