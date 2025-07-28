
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // ЭКСПОРТ STORAGE

// ПОЛУЧАЕМ ДОСТУП К БАЗЕ ДАННЫХ
// и ЭКСПОРТИРУЕМ его, чтобы другие файлы могли его использовать
export const db = getFirestore(app);

// Старая функция, которую можно оставить или удалить, если она не нужна
export const add_appointment = async (appointmentData) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), appointmentData);
    console.log('Запись успешно создана с ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Ошибка при добавлении документа: ', e);
    throw new Error('Не удалось создать запись');
  }
};