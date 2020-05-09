import localStorageDB from "localstoragedb";

const database = new localStorageDB("DragonBook", localStorage);

// Create mocked data if its not initialized
if (database.isNew()) {
  database.createTableWithData("profiles", require("./profiles.json"));

  database.commit();
}

export default database;