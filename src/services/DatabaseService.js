// DatabaseService.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('accelerometer.db');

const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS accelerometer_data (id INTEGER PRIMARY KEY AUTOINCREMENT, x REAL, y REAL, z REAL, timestamp INTEGER);',
      [],
      () => console.log('Database initialized'),
      (_, error) => console.error('Error initializing database', error)
    );
  });
};

const insertData = (data) => {
  
  const { x, y, z, timestamp =Date.now() } = data;
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO accelerometer_data (x, y, z, timestamp) VALUES (?, ?, ?, ?)',
      [x, y, z, timestamp],
      (_, { rowsAffected }) => {
        console.log(`Inserted ${rowsAffected} rows`);
      },
      (_, error) => {
        console.error('Error inserting data:', error);
      }
    );
  });
};

export { initDatabase, insertData };
