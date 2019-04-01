import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto) {
    return 'Mensaje Creado';
  }

  @Get()
  getAll(): string {
    return 'Este es un mensaje';
  }

  @Put(':id')
  update(@Body() updateMensaje: CreateMensajeDto) {
    return 'Mensaje Actualizado';
  }

  @Delete(':id')
  delete() {
    return 'Mensaje Eliminado';
  }
}
