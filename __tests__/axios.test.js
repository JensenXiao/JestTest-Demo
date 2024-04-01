const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { MockAxios } = require('../src/axios');

// 模擬 axios
jest.mock('axios');

describe('MockAxios with jest.mock', () => {
	test('MockAxios returns data from API', async () => {
	  const mockData = { data: 'mock data' };
	  axios.get.mockResolvedValue(mockData);

	  const data = await MockAxios();

	  expect(data).toEqual('mock data');
	});

	// test('MockAxios handles errors', async () => {
	  // const errorMessage = 'Error fetching data';
	  // axios.get.mockRejectedValue(new Error(errorMessage));

	  // await expect(MockAxios()).rejects.toThrow(errorMessage);
	// });
});

describe('MockAxios with axios-mock-adapter', () => {
  let mock;

  beforeEach(() => {
    // 初始化 axios mock adapter
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // 重置 axios mock adapter
    mock.restore();
  });

  test('MockAxios returns data from API', async () => {
    const mockData = { data: 'mock data' };
    mock.onGet('https://api.example.com/data').reply(200, mockData);

    const data = await MockAxios();

    expect(data).toEqual('mock data');
  });

  // test('MockAxios handles errors', async () => {
    // const errorMessage = 'Error fetching data';
    // mock.onGet('https://api.example.com/data').reply(500, errorMessage);

    // await expect(MockAxios()).rejects.toThrow(errorMessage);
  // });
});