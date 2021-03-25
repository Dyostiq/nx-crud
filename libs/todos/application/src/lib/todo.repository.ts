import { Todo } from '@dyostiq/todos/domain';

export abstract class TodoRepository {
  abstract save(todo: Todo): Promise<number>;
  abstract find(): Promise<Todo[]>;
  abstract findOne(id: number): Promise<Todo>;
}
