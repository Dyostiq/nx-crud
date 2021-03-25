import { Injectable } from '@nestjs/common';
import {CreateTodoService, TodoCreate} from "../create-todo/create-todo.service";
import {ResolveTodoService} from "../resolve-todo/resolve-todo.service";
import {UnresolveTodoService} from "../unresolve-todo/unresolve-todo.service";
import {ListTodosService} from "../list-todos/list-todos.service";
import {TodoItem} from "../todo-item.type";

@Injectable()
export class TodosFacade {
  constructor(
    private readonly create: CreateTodoService,
    private readonly resolve: ResolveTodoService,
    private readonly unresolve: UnresolveTodoService,
    private readonly list: ListTodosService,
  ) {
  }

  async createTodo(todo: TodoCreate): Promise<number> {
    return await this.create.createTodo(todo)
  }

  async listTodos(): Promise<TodoItem[]> {
    return await this.list.listTodos()
  }

  async resolveTodo(id: number): Promise<void> {
    await this.resolve.resolveTodo(id)
  }

  async unresolveTodo(id: number): Promise<void> {
    await this.unresolve.unresolveTodo(id)
  }
}
