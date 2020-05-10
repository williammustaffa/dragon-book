import moment from "moment";

class Dragon {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.createdAt = payload.createdAt;
    this.name = payload.name || "";
    this.type = payload.type || "";
    this.histories = payload.histories || [];
    this.imageUrl = payload.imageUrl;
  }

  /**
   * Returns the dragon detail url
   */
  get url() {
    return `/dragon/${this.id}`;
  }

  /**
   * Returns a formatted creation date
   * @returns {String} creation date
   */
  get creationDate() {
    return (
      this.createdAt &&
      moment(new Date(this.createdAt)).format("MMM Do YY")
    );
  }

  /**
   * Returns a color based on the dragon type
   * @returns {String} color
   */
  get typeColor() {
    const colors = {
      legendary: "yellow",
      epic: "purple",
      rare: "blue",
      normal: "grey",
      default: "black"
    };

    return colors[this.type] || colors.default;
  }

  /**
   * Returns a computed short desciption
   * @returns {String} description
   */
  get shortDescription() {
    return this.histories
      .join("\n")
      .substring(0, 200);
  }

  /**
   * Initial reducer state
   */
  static state = {
    isFetching: false,
    details: new Dragon(),
    errorMessage: ""
  }
}

export default Dragon;