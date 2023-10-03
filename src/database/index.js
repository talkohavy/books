const database = [];

function addToDB(idToAdd) {
  database.push(idToAdd);
}

function removeFromDB(idToRemove) {
  const indexToRemove = database.findIndex((currentId) => currentId === idToRemove);
  database.splice(indexToRemove, 1);
}

function checkIsFavored(idToCheck) {
  return !!database.filter((currentId) => currentId === idToCheck).length;
}

export { addToDB, checkIsFavored, database, removeFromDB };
