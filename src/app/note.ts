import { v4 as uuidv4 } from "uuid";

export class Note {
  id: string;
  title: string;
  text: string;

  constructor() {
    this.id = uuidv4();
  }
}
