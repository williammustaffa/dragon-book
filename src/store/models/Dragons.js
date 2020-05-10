import Dragon from "./Dragon";

class Dragons {
  constructor(payload = {}) {
    this.items = payload
      .map(dragon => new Dragon(dragon));
  }

  /**
   * Initial reducer state
   */
  static state = {
    isFetching: false,
    items: [],
    errorMessage: ""
  }
}

export default Dragons;