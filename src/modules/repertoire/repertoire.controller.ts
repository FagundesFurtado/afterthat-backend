import { Controller, Post, Body, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Repertoire } from './repertoire.entity';
import { RepertoireService } from './repertoire.service';
import { RepertoireSongDto } from './dto/repertoire-song.dto';

@Controller('repertoire')

@Crud({
    model: {
        type: Repertoire
    },
    routes: {
        exclude: ['replaceOneBase', "createManyBase"]
    },
    query: {
        join: {
            songs: { eager: true }
        }
    }
})
export class RepertoireController {
    constructor(private service: RepertoireService) { }

    @Post('add-song/:id')
    async addSong(@Param('id') id: number, @Body() { songs }: RepertoireSongDto) {
        return this.service.addSong(id, songs);
    }

    @Post('duplicate/:id')
    async duplicate(@Param('id') id: number) {
        return this.service.duplicate(id);
    }
}
