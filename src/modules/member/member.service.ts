import { Injectable } from '@nestjs/common';
import { Member } from './member.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberService extends TypeOrmCrudService<Member> {
    constructor(@InjectRepository(Member) private repository: Repository<Member>) {
        super(repository);
    }
}
