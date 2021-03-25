import { DynamicModule, Module, ModuleMetadata } from '@nestjs/common';
import { CreateTodoService } from './create-todo/create-todo.service';
import { ResolveTodoService } from './resolve-todo/resolve-todo.service';
import { UnresolveTodoService } from './unresolve-todo/unresolve-todo.service';
import { TodosFacade } from './todos-facade/todos-facade.service';
import { ListTodosService } from './list-todos/list-todos.service';

@Module({})
export class TodosApplicationModule {
  static for(Adapters: ModuleMetadata['imports'] = []): DynamicModule {
    return {
      imports: [...Adapters],
      controllers: [],
      providers: [
        CreateTodoService,
        ResolveTodoService,
        UnresolveTodoService,
        TodosFacade,
        ListTodosService,
      ],
      exports: [TodosFacade],
      module: TodosApplicationModule,
    };
  }
}
