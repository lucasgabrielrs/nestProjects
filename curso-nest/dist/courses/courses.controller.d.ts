import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    findOne(id: number): import("./courses.entity").Course;
    findAll(): import("./courses.entity").Course[];
    create(createCourseDTO: CreateCourseDTO): import("./courses.entity").Course[];
    update(id: number, updateCourseDTO: UpdateCourseDTO): void;
    remove(id: number): void;
}
