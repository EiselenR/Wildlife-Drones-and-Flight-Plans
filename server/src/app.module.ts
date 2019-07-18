import { Module } from '@nestjs/common';

import { controllers } from './app.controllers';
import { providers } from './app.providers';
import { imports } from './app.imports';
@Module({
  imports,
  controllers,
  providers,
  exports: [],
})
export class AppModule {}
