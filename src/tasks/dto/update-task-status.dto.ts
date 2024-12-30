import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTasktStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
