'use strict';

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    // Promise를 사용하는 함수에 성공했을 때 resolve를 실행, 실패했을 때 reject를 실행하도록 만들어줌
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
    db.query(query,[userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
  }
}

module.exports = UserStorage;