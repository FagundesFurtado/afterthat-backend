import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    MaxLength,
    IsNumber,
    IsPositive,
    IsOptional,
} from 'class-validator';

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsString({ always: true })
    @MaxLength(255, { always: true })
    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @IsPositive()
    duration: number
}
