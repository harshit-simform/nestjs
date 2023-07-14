import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AdminModule } from './admin/admin.module';
import { AlbumsController } from './albums.controller';
import { AppExceptionFilter } from './pipes/exception/aoo-exception.filter';
import { PipeModule } from './pipes/pipe.module';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [AdminModule, PipeModule],
  controllers: [UsersController, AlbumsController],
  providers: [
    UserService,
    { provide: 'DATABASE_NAME', useValue: 'mongodb' },
    {
      provide: 'Database_connection',
      useFactory: (database_connection) => {
        return database_connection === true
          ? 'connection established'
          : 'connection not established';
      },
      inject: [{ token: 'database_connection', optional: true }],
    },
    {
      provide: 'database_connection',
      useValue: false,
    },
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
  ],
})
export class AppModule {}
