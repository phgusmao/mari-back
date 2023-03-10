import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly service: FlowersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/indica')
  indica() {
    return this.service.indicas();
  }

  @Get('/sativa')
  sativa() {
    return 'sativas';
  }

  @Get('/hibrida')
  hibrida() {
    return 'hibridas';
  }
}
