import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsString({ always: true })
    @MaxLength(255, { always: true })
    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @ApiProperty()
    @Column({ type: 'datetime', nullable: false })
    @Type(() => Date)
    date: string;


    // @ManyToOne(() => Repertoire, repertoire => repertoire.events)
    // @ApiProperty()
    // @Column({ type: 'datetime', nullable: false })
    // @Type(() => Repertoire)
    // repertoire: Repertoire;

}
