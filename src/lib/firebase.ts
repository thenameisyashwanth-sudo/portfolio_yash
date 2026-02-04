import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? 'AIzaSyBzbrzExBTklayeQroOK6dnxZeQQjVmQrE',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? 'portfolio-ed805.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? 'portfolio-ed805',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? 'portfolio-ed805.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '356098007511',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '1:356098007511:web:01f7a1e60dbe585b4ceb92',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? 'G-66DSSK0912',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

let analytics: ReturnType<typeof getAnalytics> | null = null
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}
export { analytics }

export default app
