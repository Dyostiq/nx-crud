import { Injectable } from '@nestjs/common';
import { TodoRepository } from '@dyostiq/todos/application';
import { Todo } from '@dyostiq/todos/domain';
import { isDefined } from '@dyostiq/utils';

@Injectable()
export class InMemoryTodoRepositoryService extends TodoRepository {
  private readonly db: Record<string, Todo | undefined> = {};

  async find(): Promise<Todo[]> {
    return Object.values(this.db).filter(isDefined);
  }

  async findOne(id: number): Promise<Todo> {
    const todo = this.db[id];
    if (!todo) {
      throw new Error();
    }
    return todo;
  }

  async save(todo: Todo): Promise<number> {
    const id = todo.id;
    this.db[id] = todo;
    return id;
  }
}
