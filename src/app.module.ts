import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
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
  ],
})
export class AppModule {}
