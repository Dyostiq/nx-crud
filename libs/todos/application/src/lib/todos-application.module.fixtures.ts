import { Test, TestingModule } from '@nestjs/testing';
import { TodosFacade } from './todos-facade/todos-facade.service';
import { TodosApplicationModule } from '@dyostiq/todos/application';
import { Module } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { Todo } from '@dyostiq/todos/domain';
import { isDefined } from '@dyostiq/utils';

export const fixtures = {
  module: null as TestingModule | null,
  getService: () =>
    fixtures.getModule().then((module) => module.get(TodosFacade)),
  getModule: async () => {
    if (fixtures.module) {
      return fixtures.module;
    }

    @Module({
      providers: [
        {
          provide: TodoRepository,
          useClass: InMemoryTodoRepository,
        },
      ],
      exports: [TodoRepository],
    })
    class FakeAdapters {}

    return await Test.createTestingModule({
      imports: [TodosApplicationModule.for([FakeAdapters])],
    }).compile();
  },
  createMultipleTodos: async (facade: TodosFacade) =>
    Promise.all(
      [
        'Watch a movie',
        'Play some games',
        'Feed the cat',
        'Read a book a movie',
      ].map((title) => facade.createTodo({ title }))
    ),
};

export class InMemoryTodoRepository extends TodoRepository {
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
