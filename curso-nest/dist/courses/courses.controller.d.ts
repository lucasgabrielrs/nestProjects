import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    findOne(id: number): import("./courses.entity").Course;
    findAll(): import("./courses.entity").Course[];
    create(body: string): import("./courses.entity").Course[];
    update(id: number, body: string): void;
    remove(id: number): void;
}
