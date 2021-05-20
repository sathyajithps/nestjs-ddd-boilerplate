import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environment, getEnvPath } from '../env';
import { InterfaceModule } from '@Interface/interface.module';

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    envFilePath: getEnvPath(environment)
  }),
  InterfaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
