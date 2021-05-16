import { Module } from '@nestjs/common';
import { AuthProviderModule } from '@Infrastructure/auth-provider';
import { DatabaseModule } from '@Infrastructure/database';
import { ExternalModule } from '@Infrastructure/external';
import { GatewayModule } from '@Infrastructure/gateway';
import { LoggerModule } from '@Infrastructure/logging';
import { PushProviderModule } from '@Infrastructure/push-provider';
import { RepositoryModule } from '@Infrastructure/repository';

@Module({
  imports:[
    AuthProviderModule,
    DatabaseModule,
    ExternalModule,
    GatewayModule,
    LoggerModule,
    PushProviderModule,
    RepositoryModule],
  exports:[
    AuthProviderModule,
    DatabaseModule,
    ExternalModule,
    GatewayModule,
    PushProviderModule,
    RepositoryModule
  ]
})
export class InfrastructureModule{}