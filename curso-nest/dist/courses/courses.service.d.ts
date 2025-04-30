import { Course } from './courses.entity';
export declare class CoursesService {
    private courses;
    findAll(): Course[];
    findOne(id: number): Course;
    create(createCourseDTO: any): Course[];
    update(id: number, updateCourseDTO: any): void;
    remove(id: number): void;
}
