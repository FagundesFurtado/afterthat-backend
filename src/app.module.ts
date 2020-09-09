import { Module } from '@nestjs/common';

import { ApiConfigModule } from './modules/api-config/api-config.module';
import { SongModule } from '@modules/song/song.module';
import { ShowModule } from '@show/show.module';
import { RepertoireModule } from '@repertoire/repertoire.module';
import { ScheduleModule } from '@schedule/schedule.module';
import { MemberModule } from '@modules/member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiConfigService } from '@modules/api-config/api-config.service';

@Module({
  imports: [ApiConfigModule, SongModule, ScheduleModule, RepertoireModule, ShowModule, MemberModule,
    TypeOrmModule.forRootAsync({
      inject: [ApiConfigService],
      imports: [ApiConfigModule],
      useFactory: ({ databaseConfig }: ApiConfigService) => databaseConfig,
    }),],
})
export class AppModule { }
