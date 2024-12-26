export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IS_PROCESS = 'IN_PROCESS',
  DONE = 'DONE',
}
