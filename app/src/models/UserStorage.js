'use strict';

class UserStorage {
  // #데이터 은닉화
  static #users = {
    id: ["woorimIT", "나개발", "김팀장", "abc"],
    psword: ["1234", "1234", "123456", "abc"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    // reduce?
    // 받은 아규먼트만 보내기 위한 처리
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return this.#users;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users)
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;