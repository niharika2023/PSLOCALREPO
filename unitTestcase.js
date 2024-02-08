const fetchMock = require('jest-fetch-mock');
global.fetch = fetchMock;

const { getWeatherInfo } = require('./weather'); 

describe('getWeatherInfo function', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('Successful API response', () => {
    test('logs wind speed when data is available', async () => {
      const cityName = 'London';
      const apiKey = 'fake-api-key';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      const mockResponse = { wind: { speed: 5.6 } };
      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));  
      await getWeatherInfo(cityName, apiKey);
      expect(fetchMock.mock.calls.length).toBe(1);
      expect(fetchMock.mock.calls[0][0]).toBe(apiUrl);
      expect(console.log).toHaveBeenCalledWith(`Current wind speed in ${cityName}: 5.6 m/s`);
    });
  });

  describe('Error handling', () => {
    test('logs an error message when API call fails', async () => {
      const cityName = 'London';
      const apiKey = 'fake-api-key';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      fetchMock.mockReject(new Error('Network error'));
      await getWeatherInfo(cityName, apiKey);
      expect(fetchMock.mock.calls.length).toBe(1);
      expect(fetchMock.mock.calls[0][0]).toBe(apiUrl);
      expect(console.error).toHaveBeenCalledWith('There was a problem fetching data:', 'Network error');
    });
  });
});
