import { Injectable } from '@nestjs/common';
import {TodoRepository} from "../todo.repository";

@Injectable()
export class UnresolveTodoService {
  constructor(
    private readonly repository: TodoRepository,
  ) {}

  async unresolveTodo(id: number): Promise<void> {
    const todo = await this.repository.findOne(id)
    todo.unresolve()
    await this.repository.save(todo)
  }
}
