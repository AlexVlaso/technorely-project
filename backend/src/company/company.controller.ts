import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CompanyT, RequestWithUserId } from 'src/libs/types/types';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DeleteResult } from 'typeorm';

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req: RequestWithUserId): Promise<CompanyT[]> {
    return this.companyService.findAll(req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findById(
    @Param('id') id: string,
    @Request() req: RequestWithUserId,
  ): Promise<CompanyT> {
    return this.companyService.findById(+id, req.user.id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() body: CreateCompanyDto,
    @Request() req: RequestWithUserId,
  ): Promise<CompanyT> {
    return this.companyService.create(body, req.user.id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  update(
    @Body() body: UpdateCompanyDto,
    @Request() req: RequestWithUserId,
  ): Promise<CompanyT> {
    return this.companyService.update(body, req.user.id);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(
    @Param('id') id: string,
    @Request() req: RequestWithUserId,
  ): Promise<DeleteResult> {
    return this.companyService.delete(+id, req.user.id);
  }
}
