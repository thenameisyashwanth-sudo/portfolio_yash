import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

const CONTACT_COLLECTION = 'contactSubmissions'

export type ContactSubmission = {
  name: string
  email: string
  message: string
  createdAt?: ReturnType<typeof serverTimestamp>
}

export async function submitContactForm(data: {
  name: string
  email: string
  message: string
}): Promise<void> {
  await addDoc(collection(db, CONTACT_COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
  })
}
