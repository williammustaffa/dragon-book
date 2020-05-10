class Dragon {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.createdAt = payload.createdAt;
    this.name = payload.name || "";
    this.type = payload.type || "";
    this.histories = payload.histories || [];
  }

  static state = {
    isFetching: false,
    details: new Dragon(),
    errorMessage: ""
  }
}

export default Dragon;