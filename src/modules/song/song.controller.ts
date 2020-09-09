import { Controller, BadRequestException } from '@nestjs/common';
import { SongService } from './song.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Song } from './song.entity';

@Controller('song')
@Crud({
    model: {
        type: Song
    },
    routes: {
        exclude: ['replaceOneBase', "createManyBase"]
    }
})
export class SongController implements CrudController<Song> {
    constructor(public service: SongService) { }

    getManyBase?(req: import("@nestjsx/crud").CrudRequest): Promise<Song[]> {
        console.log('get many base');
        throw new BadRequestException()
    }

}
