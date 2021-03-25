import { Injectable } from '@nestjs/common';
import {TodoRepository} from "../todo.repository";
import {Todo} from "@dyostiq/todos/domain";

@Injectable()
export class ResolveTodoService {
  constructor(private readonly repository: TodoRepository) {
  }

  async resolveTodo(id: number): Promise<void> {
    const todo: Todo = await this.repository.findOne(id)
    todo.resolve()
    await this.repository.save(todo)
  }
}
