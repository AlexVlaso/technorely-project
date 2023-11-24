import { User } from 'src/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ name: 'service_of_activity' })
  serviceOfActivity: string;

  @Column({ name: 'number_of_employees' })
  numberOfEmployees: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @ManyToOne(() => User, (user) => user.companies)
  user: User;
}
