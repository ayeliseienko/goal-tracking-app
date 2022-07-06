import { doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';

export async function addGoal(db, collectionName, docName, goalData) {
  const docRef = doc(db, collectionName, docName);

  await setDoc(docRef, goalData);
}

export async function deleteGoal(db, collectionName, docName) {
  const docRef = doc(db, collectionName, docName);

  await deleteDoc(docRef);
}

export async function changeMilestoneStatus(
  db,
  collectionName,
  docName,
  updData
) {
  const docRef = doc(db, collectionName, docName);

  const { milestones } = updData;
  let { completed } = updData;

  if (
    milestones.filter((milestone) => milestone.completed === true).length ===
    milestones.length
  ) {
    completed = true;
  } else {
    completed = false;
  }

  await updateDoc(docRef, { completed, milestones });
}
