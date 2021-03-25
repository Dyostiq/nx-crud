import { Todo } from './todo';


it(`new todo should be active`, async () => {
  // given
  // when
  const todo = new Todo('Watch a movie')
  // then
  expect(todo.isActive()).toBe(true)
})

it(`should preserve a title`, async () => {
  // given
  // when
  const todo = new Todo('Watch whatever')
  // then
  expect(todo.title).toBe('Watch whatever')
})

it(`should not be active after resolving`, async () => {
  // given
  const todo = new Todo('Watch a movie');
  // when
  todo.resolve()
  // then
  expect(todo.isActive()).toBe(false)
})

it(`should be able to unresolve a todo`, async () => {
  // given
  const todo = new Todo('Watch a movie');
  // and
  todo.resolve()
  // when
  todo.unresolve();
  // then
  expect(todo.isActive()).toBe(true)
})

it(`should not be able to resolve already resolved todo`, async () => {
  // given
  const todo = new Todo('Watch a movie')
  // and
  todo.resolve()
  // when
  const when = () => todo.resolve()
  // then
  expect(when).toThrowError()
})

it(`should not be able to unresolve active todo`, async () => {
  // given
  const todo = new Todo('Watch a movie')
  // when
  const when = () => todo.unresolve()
  // then
  expect(when).toThrowError()
})
