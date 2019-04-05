export default class CityService {
  data = [
    'Москва',
    'Санкт-Петербург',
    'Нижний Новгород'
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        //   reject(new Error('Something bad happened'));
        // } else {
          resolve(this.data);
        // }
      }, 700);
    });
  }
}
