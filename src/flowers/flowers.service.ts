import { Injectable } from '@nestjs/common';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      { id: 1, name: 'Sour Diesel' },
      { id: 2, name: 'Critical Kush' },
      { id: 3, name: 'Bubba Kush' },
    ];
  }

  indicas() {
    return 'indicas';
  }
}
