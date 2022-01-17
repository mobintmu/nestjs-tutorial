import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { isNumberObject } from 'util/types';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    
    constructor(private readonly coffeesService: CoffeesService) {}


    @Get()
    findAll(@Query() paginationQuery) {
      const { limit, offset } = paginationQuery;
      return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return `This action returns #${id} coffee`;
    }
  
    @Post()
    create(@Body() body) {
      return body;
      // return `This action creates a coffee`;
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
      return `This action updates #${id} coffee`;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes #${id} coffee`;
    }




}
