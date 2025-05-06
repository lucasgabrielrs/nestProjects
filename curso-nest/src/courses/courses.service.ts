import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
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

  findOne(id: number) {
    const course = this.courses.find((Course) => Course.id === id);
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return course;
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
    return this.courses;
  }

  update(id: number, updateCourseDTO: any) {
    const existCourse = this.findOne(id);
    if (existCourse) {
      const index = this.courses.findIndex((course) => course.id === id);
      if (index !== -1) {
        // Atualiza apenas os campos do updateCourseDTO e mantém os outros
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.courses[index] = {
          ...this.courses[index], // Mantém os dados existentes
          ...updateCourseDTO, // Atualiza com os novos valores
        };
      }
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((Course) => Course.id === id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
