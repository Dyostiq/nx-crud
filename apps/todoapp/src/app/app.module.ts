import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TodosUiModule} from "@dyostiq/todos/ui";

@Module({
  imports: [TodosUiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
