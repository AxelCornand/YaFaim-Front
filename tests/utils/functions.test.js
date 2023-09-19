import { isTokenOk } from "../../src/utils/functions";

// Mock sessionStorage - simulate fake sessionstorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;



describe('isTokenOk', () => {

  test('should return false if token is expired', () => {
    // Simulate an expired token - https://www.javainuse.com/jwtgenerator
    const expiredToken = {
      accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkplcmVteSIsImV4cCI6MTY4NTcwMzkwNCwiaWF0IjoxNjg1NzAwMzA0fQ.SOk29XUTaIg3z_1q0rNjFHt_bxykl7Pl6GoGcMVNaZA',
    };

    // Mock the getItem method to return the expired token
    sessionStorage.getItem.mockReturnValue(JSON.stringify(expiredToken));

    // Call the isTokenOk function
    const result = isTokenOk();

    expect(result).toBe(false);
  });


  test('should return true if token is valid', () => {

    const validToken = {
      accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODcxMDY0NDIsImV4cCI6MTY4NzExMDA0Miwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.E_DQA57CtZHBS1fIcGJPSYLmHjQsN_VcUeiIhI54zp39i28j9I2LvxFC3csZImwtRO9ZoB6pQAEEjxbODOTloTJujjqBNIcnXef8uDm58ULjW9xWewu5iZsEzvu9AxhYF2_BscJrNQhtBS4HIefrI4dC8YT_qQVEFpW1i6CZ3WcVn9oczK_nDWT2qUIP7p2siphosdriaRHzNTuVSPpt5oPn3OLpr6eFT_HsNRVIO - XtvCzS9T8kc0AxM - JYCMqdET9nCLHbATRvgSUiU_fzvVlLlOW2m - 2bcESLq_7kve4kUme3LtnB_H- 1DOBxEA2buifr2_3QH46-eFC7TMkZIQ"
    };

    sessionStorage.getItem.mockReturnValue(JSON.stringify(validToken));

    const result = isTokenOk();

    expect(result).toBe(true);
  });

});
