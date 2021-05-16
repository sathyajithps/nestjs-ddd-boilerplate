import { Module } from '@nestjs/common';
import { DomainModule } from '@Domain/domain.module';
import { InfrastructureModule } from '@Infrastructure/infrastructure.module';

@Module({
  imports:[InfrastructureModule,DomainModule]
})
export class ApplicationModule{}