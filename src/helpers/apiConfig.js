class ApiConfig {
  constructor() {
    this.base = 'https://mocki.io/v1';
  }

  get = (url) => {
    return new Promise((resolve, reject) => {
      fetch(this.base + url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default ApiConfig;
