import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// import { validate } from './configuration/validationEnviromentConfig';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { envConfiguration } from './configuration/enviromentConfig';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsLoggerFilter } from './utils/excepcionesLogger.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfiguration],
      // validate,
    }),
    PostsModule,
    DatabaseModule,
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {}
