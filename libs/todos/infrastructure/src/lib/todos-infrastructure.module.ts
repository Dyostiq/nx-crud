import { Module } from '@nestjs/common';
import { InMemoryTodoRepositoryService } from './in-memory-todo-repository/in-memory-todo-repository.service';
import {TodoRepository} from "@dyostiq/todos/application";

@Module({
  controllers: [],
  providers: [{
    provide: TodoRepository,
    useClass: InMemoryTodoRepositoryService,
  }],
  exports: [TodoRepository],
})
export class TodosInfrastructureModule {}
