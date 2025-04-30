import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get('unique/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.findOne(id);
  }

  @Get('findAll')
  findAll() {
    return this.courseService.findAll();
  }

  @Post('create')
  create(@Body() body: string) {
    return this.courseService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: string) {
    return this.courseService.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.remove(id);
  }
}
