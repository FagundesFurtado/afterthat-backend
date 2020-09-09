import { Controller } from '@nestjs/common';
import { Member } from './member.entity';
import { Crud } from '@nestjsx/crud';
import { MemberService } from './member.service';

@Controller('member')
@Crud({
    model: {
        type: Member
    },
    routes: {
        exclude: ['replaceOneBase', "createManyBase", 'deleteOneBase']
    }
})
export class MemberController {

    constructor(private service: MemberService) { }

}
