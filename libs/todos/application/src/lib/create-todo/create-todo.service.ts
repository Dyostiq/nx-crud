import { Injectable } from '@nestjs/common';
import {TodoRepository} from "../todo.repository";
import {Todo} from "@dyostiq/todos/domain";

export type TodoCreate = { title: string };

@Injectable()
export class CreateTodoService {
  constructor(
    private readonly repository: TodoRepository
  ) {
  }

  async createTodo(createTodo: TodoCreate): Promise<number> {
    const todo = new Todo(createTodo.title)
    await this.repository.save(todo)
    return todo.id
  }
}
