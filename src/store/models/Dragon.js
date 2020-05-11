import moment from "moment";

class Dragon {
  constructor(payload = {}) {
    const histories = payload.histories || [];

    this.id = payload.id || "";
    this.createdAt = payload.createdAt;
    this.name = payload.name || "";
    this.type = payload.type || "common";
    this.history = histories.join("/n");
    this.imageUrl = payload.imageUrl;
  }

  /**
   * Returns the dragon detail url
   */
  get detailsUrl() {
    return `/dragon/${this.id}`;
  }

  /**
   * Returns the dragon update url
   */
  get updateUrl() {
    return `/dragon/update/${this.id}`;
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
    return this.typeSpec.color;
  }

  /**
   * Returns dragon current type
   */
  get typeSpec() {
    return Dragon.types[this.type] || Dragon.types.common;
  }

  /**
   * Returns a computed short desciption
   * @returns {String} description
   */
  get shortDescription() {
    return this.history.substring(0, 200);
  }

  static types = {
    legendary: { id: "legendary", name: "Legendary", color: "yellow", stars: 4 },
    epic: { id: "epic", name: "Epic", color: "purple", stars: 3 },
    rare: { id: "rare", name: "Rare", color: "blue", stars: 2 },
    common: { id: "common", name: "Common", color: "black", stars: 1 },
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