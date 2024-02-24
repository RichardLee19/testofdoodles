// mockFetch.js

// Define a function to mock the fetch API
export const mockFetch = (url, options) => {
    return new Promise((resolve, reject) => {
      // Mock response data
      const responseData = {
        ok: true, // or false based on your requirement
        json: () => Promise.resolve({ message: 'Mock response data' }), // Mock JSON response
      };
  
      // Simulate delay (optional)
      setTimeout(() => {
        resolve(responseData);
      }, 1000); // 1 second delay (adjust as needed)
    });
  };
  