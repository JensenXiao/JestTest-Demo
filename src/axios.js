const axios = require('axios');

async function MockAxios() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    //console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  MockAxios
};