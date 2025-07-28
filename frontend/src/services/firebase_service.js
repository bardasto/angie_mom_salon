
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBjR804Vs_sidWcgP_EJaMA7ZZp15Cvclo",
  authDomain: "angie-mom-studio.firebaseapp.com",
  projectId: "angie-mom-studio",
  storageBucket: "angie-mom-studio.firebasestorage.app",
  messagingSenderId: "583068742280",
  appId: "1:583068742280:web:4a72ab8322fb39c391a53d",
  measurementId: "G-XGRZSRK6JD"
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