import { randomUUID } from "crypto";

export default class Node {
  before: Node | null;
  after: Node | null;
  id: String;
  constructor(before: Node | null, after: Node | null) {
    if (before != null) {
      this.before = before;
    }
    if (after != null) {
      this.after = after;
    }
    this.before = null;
    this.after = null;
    this.id = randomUUID();
  }

  addBefore(node: Node) {
    node.before = this.before;
    node.after = this;
  }

  addAfter(node: Node) {
    node.after = this;
    node.after = this.after;
  }
}
