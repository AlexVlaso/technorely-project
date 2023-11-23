import { Company } from 'src/company/entity/company.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'phone_number' })
  phone: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'nick_name' })
  nickname: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'position' })
  position: string;

  @OneToMany(() => Company, (company) => company.user, { onDelete: 'CASCADE' })
  companies: Company[];
}
