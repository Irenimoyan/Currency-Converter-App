import { db } from "../firebase";
import {
  addDoc, collection, serverTimestamp,
  query, where, orderBy, onSnapshot, deleteDoc, doc
} from "firebase/firestore";

const coll = "conversions";

export async function addConversionEntry(entry) {
  // entry: { userId, amount, fromCurrency, toCurrency, result, at }
  if (!entry.userId) return; // only save if logged in
  await addDoc(collection(db, coll), {
    ...entry,
    createdAt: serverTimestamp(),
  });
}

export function listenUserConversions(userId, cb) {
  const q = query(
    collection(db, coll),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) => {
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    cb(items);
  });
}

export async function deleteConversion(id) {
  await deleteDoc(doc(db, coll, id));
}
