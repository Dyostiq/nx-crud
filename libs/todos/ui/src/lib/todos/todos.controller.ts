import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {TodoCreate, TodosFacade} from "@dyostiq/todos/application";

@Controller('todos')
export class TodosController {
  constructor(
    private readonly facade: TodosFacade
  ) {
  }

  @Get()
  async get() {
    return await this.facade.listTodos()
  }

  @Post()
  async create(
    @Body() todo: TodoCreate
  ) {
    await this.facade.createTodo(todo)
  }

  @Put(':id')
  async active(
    @Param('id') id: string,
    @Body() todoChange: { active: boolean }
  ) {
    if (!todoChange.active) {
      await this.facade.resolveTodo(+id)
    } else {
      await this.facade.unresolveTodo(+id)
    }
  }
}
