const Asynchronous = require('asynchronous');

describe('Asynchronous Tests', () => {
	
  // 測試 Callbacks，不使用 done
  test('Testing Callbacks without done', () => {
	Asynchronous.fetchDataWithCallback((data) => {
		expect(data).toBe('This is a callback');
    });
  });
  
  // 測試 Callbacks，使用 done
  test('Testing Callbacks with done', (done) => {
    Asynchronous.fetchDataWithCallback_done((data) => {
      try {
        expect(data).toBe('This is a callback_done');
        done(); // 在測試完成時調用 done
      } catch (error) {
        done(error); // 如果出現錯誤，也調用 done 並傳遞錯誤
      }
    });
  });

  // 測試 Promise，不使用 return
  test('Testing Promise without return', () => {
    Asynchronous.fetchDataWithPromise().then((data) => {
      expect(data).toBe('This is a Promise');
    });
  });
  
  // 測試 Promise，使用 return
    test('Testing Promise with return', () => {
    return Asynchronous.fetchDataWithPromise_return().then((data) => {
      expect(data).toBe('This is a Promise_return');
    });
  });

  // 使用 async/await 測試 Promise
  test('Testing Promise using async/await', async () => {
    const data = await Asynchronous.fetchDataWithPromise_await();
    expect(data).toBe('This is a Promise_await');
  });
  
  // 使用 .resolves matcher 測試 Promise
  test('Testing Promise using async/await & .resolves matcher', async () => {
    await expect(Asynchronous.fetchDataWithPromise_await()).resolves.toBe('This is a Promise_await');
  });
});