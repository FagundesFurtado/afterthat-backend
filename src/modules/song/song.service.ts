import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class SongService extends TypeOrmCrudService<Song> {
    constructor(@InjectRepository(Song) private repository: Repository<Song>) {
        super(repository);
    }
}
