import { Module } from '@nestjs/common';
import { TodosController } from './todos/todos.controller';
import {TodosShellModule} from "@dyostiq/todos/shell";

@Module({
  imports: [TodosShellModule],
  controllers: [TodosController],
  providers: [],
  exports: [],
})
export class TodosUiModule {}
