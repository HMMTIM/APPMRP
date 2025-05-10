import { db } from './firebase-config.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Reset counter to 0
async function resetCounter() {
  try {
    const counterRef = doc(db, "contadores", "ordens");
    await setDoc(counterRef, { valor: 0 });
    console.log("Contador zerado com sucesso!");
  } catch (error) {
    console.error("Erro ao zerar contador:", error);
  }
}

resetCounter();