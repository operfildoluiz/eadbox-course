export class Course {
  title: string = "";
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
