const API_SAMPLE_RESPONSE = {"comments":[{"updatedBy":"Helen Stevens","comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","updatedOn":"2022-08-11T09:18:10.123Z","taggedTo":[]},{"updatedBy":"Ethel Howard Daniel","comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","updatedOn":"2022-08-11T08:30:46.235Z","taggedTo":["Dan Jenkin","John Doe"]},{"updatedBy":"Ethel Howard Daniel","comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","updatedOn":"2022-08-11T08:30:46.235Z","taggedTo":["Dan Jenkin"]}]}

class ApiConfig {
  constructor() {
    this.base = 'https://example.io/v1/';
  }

  get = (url) => {
    return new Promise((resolve, reject) => {
      fetch(this.base + url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(API_SAMPLE_RESPONSE);
        })
        .catch((error) => {
          resolve(API_SAMPLE_RESPONSE);
        });
    });
  };
}

export default ApiConfig;
