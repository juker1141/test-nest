import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTasktStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
