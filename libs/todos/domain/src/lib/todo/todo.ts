export class Todo {
  private status: 'active' | 'resolved' = 'active';

  constructor(
    public readonly title: string,
    public readonly id = Math.random()
  ) {}

  isActive(): boolean {
    return this.status === 'active';
  }

  resolve(): void {
    if (this.isActive()) {
      this.status = 'resolved';
    } else {
      throw new Error();
    }
  }

  unresolve(): void {
    if (!this.isActive()) {
      this.status = 'active';
    } else {
      throw new Error();
    }
  }
}
