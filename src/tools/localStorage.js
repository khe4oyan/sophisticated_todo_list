class ST { // ST - Storage
  constructor() {throw new Error('Cant create instance of ST');}

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static clear() {
    localStorage.clear();
  }
};

export default ST;