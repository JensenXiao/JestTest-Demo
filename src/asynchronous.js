// asynchronous.js
const Asynchronous = {
  // 使用 Callbacks 測試的非同步函數
  fetchDataWithCallback(callback) {
    setTimeout(() => {
      callback('This is a callback');
    }, 10000);
  },
  
    fetchDataWithCallback_done(callback) {
    setTimeout(() => {
      callback('This is a callback_done');
    }, 1000);
  },

  // 使用 Promise 測試的非同步函數
  fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is a Promise');
      }, 10000);
    });
  },
  
  fetchDataWithPromise_return() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is a Promise_return');
      }, 1000);
    });
  },
  
  fetchDataWithPromise_await() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is a Promise_await');
      }, 1000);
    });
  }
};

module.exports = Asynchronous;