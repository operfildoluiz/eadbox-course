import {Course} from './course';

describe('Course', () => {
  it('should create an instance', () => {
    expect(new Course()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Course({
      course_id: '5b433eec7ffec6002e87098f',
      course_slug: 'assistente-administrativo',
      title: 'Assistente Administrativo',
    });
    
    expect(todo.course_id).toEqual('hello');
    expect(todo.course_slug).toEqual('assistente-administrativo');
    expect(todo.title).toEqual('Assistente Administrativo');

  });
});
