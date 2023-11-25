import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entity/company.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyT } from 'src/libs/types/types';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}

  async findAll(userId: number): Promise<CompanyT[]> {
    return this.companyRepository.find({
      where: { user: { id: userId } },
      order: { name: 'ASC', serviceOfActivity: 'ASC' },
    });
  }
  async findById(id: number, userId: number): Promise<CompanyT> {
    const company = await this.companyRepository.findOne({
      where: { id, user: { id: userId } },
    });
    if (!company) {
      throw new BadRequestException('Company with this id does not exist');
    }

    return company;
  }

  async create(
    createCompanyDto: CreateCompanyDto,
    userId: number,
  ): Promise<CompanyT> {
    const isExist = await this.companyRepository.findOne({
      where: { name: createCompanyDto.name, user: { id: userId } },
    });
    if (isExist) {
      throw new BadRequestException('Company with this name already exist');
    }
    const company = { ...createCompanyDto, user: { id: userId } };
    return this.companyRepository.save(company);
  }

  async update(
    updateCompanyDto: UpdateCompanyDto,
    userId: number,
  ): Promise<CompanyT> {
    const company = await this.findById(updateCompanyDto.id, userId);

    Object.assign(company, updateCompanyDto);
    return this.companyRepository.save(company);
  }

  async delete(id: number, userId: number): Promise<DeleteResult> {
    return this.companyRepository.delete({ id, user: { id: userId } });
  }
}
