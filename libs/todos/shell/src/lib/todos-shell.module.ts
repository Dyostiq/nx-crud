import { Module } from '@nestjs/common';
import { TodosApplicationModule } from '@dyostiq/todos/application';
import { TodosInfrastructureModule } from '@dyostiq/todos/infrastructure';

@Module({
  imports: [TodosApplicationModule.for([TodosInfrastructureModule])],
  controllers: [],
  providers: [],
  exports: [TodosApplicationModule],
})
export class TodosShellModule {}
