import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { Song } from './song.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SongController],
  providers: [SongService],
  imports: [TypeOrmModule.forFeature([Song])]
})
export class SongModule { }
