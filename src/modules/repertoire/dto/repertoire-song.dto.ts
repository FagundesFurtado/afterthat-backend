import { ApiProperty } from '@nestjs/swagger';
import { IsPositiveNumberArray } from 'src/validators/IsPositiveNumberArray.validator';

export class RepertoireSongDto {
    @ApiProperty()
    @IsPositiveNumberArray({ message: "Every value in the array must be a positive number" })
    readonly songs: number[];

}