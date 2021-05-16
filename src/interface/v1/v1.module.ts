import { Module } from '@nestjs/common';
import { ApplicationModule } from '@Application/application.module';

@Module({imports: [ApplicationModule]})
export class V1Module{}