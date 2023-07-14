import * as joi from 'joi';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  isEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';

import { Type } from 'class-transformer';

export const PipeSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  age: joi.number().required(),
  hobbies: joi.array().items(joi.string()).required().min(0),
  isActive: joi.boolean(),
});

export class PipeDTO {
  name: string;
  email: string;
  age: number;
  hobbies: string[];
  isActive?: boolean;
}

export class PipeDtoClassValidator {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  age: number;

  @IsString({ each: true })
  hobbies: string[];

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isActive?: boolean;
}
