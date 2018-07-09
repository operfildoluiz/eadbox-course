export class Course {

    course_id: string = '';
    course_slug: string = '';
    title: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
