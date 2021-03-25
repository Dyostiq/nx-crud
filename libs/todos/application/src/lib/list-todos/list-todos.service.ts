import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../todo.repository';
import { Todo } from '@dyostiq/todos/domain';
import { TodoItem } from '../todo-item.type';

@Injectable()
export class ListTodosService {
  constructor(private readonly repository: TodoRepository) {}

  async listTodos(): Promise<TodoItem[]> {
    const todos: Todo[] = await this.repository.find();
    return todos.map((todo) => ({
      title: todo.title,
      id: todo.id,
      active: todo.isActive(),
    }));
  }
}
