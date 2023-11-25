import { IsNotEmpty } from 'class-validator';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends CreateCompanyDto {
  @IsNotEmpty()
  id: number;
}
