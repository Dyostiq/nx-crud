import {TodosFacade} from './todos-facade/todos-facade.service';
import {fixtures} from "./todos-application.module.fixtures";

let service: TodosFacade;

beforeEach(async () => {
  service = await fixtures.getService();
});

it(`when creating a todo it should be stored`, async () => {
  // given
  const id = await service.createTodo({
    title: 'Watch a movie',
  });
  // when
  const listed = await service.listTodos();
  // then
  expect(listed).toStrictEqual([
    {
      title: 'Watch a movie',
      active: true,
      id,
    },
  ]);
});

it(`should list multiple todos`, async () => {
  // given
  const ids = await fixtures.createMultipleTodos(service);
  // when
  const listed = await service.listTodos();
  // then
  expect(listed).toStrictEqual([
    {
      title: 'Watch a movie',
      active: true,
      id: ids[0],
    },
    {
      title: 'Play some games',
      active: true,
      id: ids[1],
    },
    {
      title: 'Feed the cat',
      active: true,
      id: ids[2],
    },
    {
      title: 'Read a book a movie',
      active: true,
      id: ids[3],
    },
  ]);
});

it(`should resolve one todo`, async () => {
  // given
  const ids = await fixtures.createMultipleTodos(service)
  // when
  await service.resolveTodo(ids[1])
  // then
  expect(await service.listTodos()).toStrictEqual([
    {
      title: 'Watch a movie',
      active: true,
      id: ids[0],
    },
    {
      title: 'Play some games',
      active: false,
      id: ids[1],
    },
    {
      title: 'Feed the cat',
      active: true,
      id: ids[2],
    },
    {
      title: 'Read a book a movie',
      active: true,
      id: ids[3],
    },
  ])
})

it(`should unresolve one todo`, async () => {
  // given
  const ids = await fixtures.createMultipleTodos(service)
  // and
  await service.resolveTodo(ids[1])
  // when
  await service.unresolveTodo(ids[1])
  // then
  expect(await service.listTodos()).toStrictEqual([
    {
      title: 'Watch a movie',
      active: true,
      id: ids[0],
    },
    {
      title: 'Play some games',
      active: true,
      id: ids[1],
    },
    {
      title: 'Feed the cat',
      active: true,
      id: ids[2],
    },
    {
      title: 'Read a book a movie',
      active: true,
      id: ids[3],
    },
  ])
})
