import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  NotAcceptableException,
  Optional,
  PipeTransform,
} from '@nestjs/common';
import { PipeSchema } from './pipe.dto';

import { ObjectSchema } from 'joi';

interface PipeOptions {
  parseInt: boolean;
}

export class CustomPipe implements PipeTransform {
  private parseInt: boolean;
  constructor(@Optional() options: PipeOptions) {
    this.parseInt = options?.parseInt === false ? false : true;
  }
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log(value);
    value = this.parseInt ? parseInt(value) : value;

    if (value != 5) {
      throw new NotAcceptableException('this is not acceptable');
    }

    return value;
  }
}

@Injectable()
export class ValidatePipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any) {
    console.log(value);
    const { error } = this.schema.validate(value);
    console.log(error);
    if (error) {
      console.log('herr');
      throw new BadRequestException({
        message: 'validation failed',
        err: error.message,
      });
    }
    return value;
  }
}
