import { Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { Crud } from '@nestjsx/crud';

@Controller('event')
@Crud({
    model: {
        type: Event
    },
    routes: {
        exclude: ['replaceOneBase', "createManyBase", 'deleteOneBase']
    }
})
export class EventController {

    constructor(private service: EventService) { }

}
