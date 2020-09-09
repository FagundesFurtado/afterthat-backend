import { Module } from '@nestjs/common';
import { RepertoireController } from './repertoire.controller';
import { RepertoireService } from './repertoire.service';
import { Repertoire } from './repertoire.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from '@modules/song/song.entity';


@Module({
  controllers: [RepertoireController],
  providers: [RepertoireService],
  imports: [TypeOrmModule.forFeature([Repertoire, Song])]
})
export class RepertoireModule {

}
