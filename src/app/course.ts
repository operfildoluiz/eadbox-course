export class Course {

    course_id: string = '';
    course_slug: string = '';
    title: string = '';
    is_paid: boolean = false;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
