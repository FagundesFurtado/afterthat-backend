import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    MaxLength,
} from 'class-validator';
import { Song } from '@modules/song/song.entity';

@Entity()
export class Repertoire {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsString({ always: true })
    @MaxLength(255, { always: true })
    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @ManyToMany(() => Song, song => song.id, { cascade: true })
    @JoinTable()
    songs: Song[]


}
