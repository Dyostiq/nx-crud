import { Todo } from './todo';


it(`new todo should be active`, async () => {
  // given
  // when
  const todo = new Todo()
  // then
  expect(todo.isActive()).toBe(true)
})

it(`should not be active after resolving`, async () => {
  // given
  const todo = new Todo();
  // when
  todo.resolve()
  // then
  expect(todo.isActive()).toBe(false)
})

it(`should be able to unresolve a todo`, async () => {
  // given
  const todo = new Todo();
  // and
  todo.resolve()
  // when
  todo.unresolve();
  // then
  expect(todo.isActive()).toBe(true)
})

it(`should not be able to resolve already resolved todo`, async () => {
  // given
  const todo = new Todo()
  // and
  todo.resolve()
  // when
  const when = () => todo.resolve()
  // then
  expect(when).toThrowError()
})

it(`should not be able to unresolve active todo`, async () => {
  // given
  const todo = new Todo()
  // when
  const when = () => todo.unresolve()
  // then
  expect(when).toThrowError()
})
