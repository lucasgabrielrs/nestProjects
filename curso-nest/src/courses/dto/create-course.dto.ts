import { IsString } from 'class-validator';

export class CreateCourseDTO {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly description: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ each: true })
  readonly tags: string[];
}
