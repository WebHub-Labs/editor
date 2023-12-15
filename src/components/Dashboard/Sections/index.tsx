// import { randomUUID } from "crypto";

export default class Node {
  before: string | null;
  after: string | null;
  id: string;
  constructor(before: string | null, after: string | null) {
    if (before != null) {
      this.before = before;
    }
    if (after != null) {
      this.after = after;
    }
    this.before = null;
    this.after = null;
    this.id = Math.random().toString();
  }

  addBefore(node: Node) {
    this.before = node.id;
    this.after = node.before;
    node.after = this.id;

    // node.after = this.id;
  }

  addAfter(node: Node) {
    this.after = node.id;
    // node.after = this.after;
  }
}
