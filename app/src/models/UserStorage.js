'use strict';

class UserStroage {
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
}

module.exports = UserStroage;