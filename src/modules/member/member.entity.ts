import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsString({ always: true })
    @MaxLength(50, { always: true })
    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string;

    @ApiProperty()
    @IsString({ always: true })
    @MaxLength(50, { always: true })
    @Column({ type: 'varchar', length: 50, nullable: false })
    lastName: string;

    @ApiProperty()
    @IsString({ always: true })
    @Column({ type: 'text' })
    bio: string;

    @ApiProperty()
    @IsString({ always: true })
    @Column({ type: 'text' })
    instagram: string;

    @ApiProperty()
    @IsString({ always: true })
    @Column({ type: 'text' })
    facebook: string;

}
