import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repertoire } from './repertoire.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Song } from '@modules/song/song.entity';

@Injectable()
export class RepertoireService extends TypeOrmCrudService<Repertoire> {
    constructor(@InjectRepository(Repertoire) private repository: Repository<Repertoire>, @InjectRepository(Song) private songRepository: Repository<Song>) {
        super(repository);
    }

    async addSong(id: number, songs: number[]) {
        const repertoire = await this.repository.findOneOrFail(id);
        const songsList = await this.songRepository.findByIds(songs);
        repertoire.songs = songsList;
        return this.repository.save(repertoire);
    }

    async duplicate(id: number) {
        const repertoire = await this.repository.findOneOrFail(id, { relations: ['songs'] });
        delete repertoire.id
        return this.repository.save(repertoire);
    }

}
