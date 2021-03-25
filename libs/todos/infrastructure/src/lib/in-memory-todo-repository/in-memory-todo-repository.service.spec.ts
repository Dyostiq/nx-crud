import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryTodoRepositoryService } from './in-memory-todo-repository.service';
import { Todo } from '@dyostiq/todos/domain';

let service: InMemoryTodoRepositoryService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [InMemoryTodoRepositoryService],
  }).compile();

  service = module.get<InMemoryTodoRepositoryService>(
    InMemoryTodoRepositoryService
  );
});

it(`should store todos`, async () => {
  // given
  const todos = [new Todo('first'), new Todo('second'), new Todo('third')];
  // and
  await Promise.all(todos.map((todo) => service.save(todo)));
  // when
  const retrieved = await service.find();
  // then
  expect(retrieved).toStrictEqual(todos);
});

it(`should retrieve correct todo`, async () => {
  // given
  const todos = [new Todo('first'), new Todo('second'), new Todo('third')];
  // and
  await Promise.all(todos.map((todo) => service.save(todo)));
  // when
  const retrieved = await service.findOne(todos[1].id);
  // then
  expect(retrieved).toStrictEqual(todos[1]);
});
