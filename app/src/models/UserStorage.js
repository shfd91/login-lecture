'use strict';

// promise를 반환하도록 설정
const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users) // => [id, psword, name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    // reduce?
    // 받은 아규먼트만 보내기 위한 처리
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log("newUsers =", newUsers);
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile("./src/databases/users.json")
      .then(data => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);

    // , (err, data) => {
    //   if (err) throw err;
    //   const users = JSON.parse(data);
    //   const idx = users.id.indexOf(id);
    //   const userKeys = Object.keys(users) // => [id, psword, name]
    //   const userInfo = userKeys.reduce((newUser, info) => {
    //     newUser[info] = users[info][idx];
    //     return newUser;
    //   }, {});
    //   return userInfo;
    // });
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;