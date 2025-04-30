"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    courses = [
        {
            id: 1,
            name: 'GPT',
            description: 'ADASDA',
            tags: ['dad', 'dadsa'],
        },
    ];
    findAll() {
        return this.courses;
    }
    findOne(id) {
        const course = this.courses.find((Course) => Course.id === id);
        if (!course) {
            throw new common_1.NotFoundException(`Course ID ${id} not found`);
        }
        return course;
    }
    create(createCourseDTO) {
        this.courses.push(createCourseDTO);
        return this.courses;
    }
    update(id, updateCourseDTO) {
        const existCourse = this.findOne(id);
        if (existCourse) {
            const index = this.courses.findIndex((Course) => Course.id === id);
            this.courses[index] = {
                id,
                ...updateCourseDTO,
            };
        }
    }
    remove(id) {
        const index = this.courses.findIndex((Course) => Course.id === id);
        if (index >= 0) {
            this.courses.splice(index, 1);
        }
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map