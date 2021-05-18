import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column({default: true})
  is_published: boolean;

  @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  created_at: Date;

  @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updated_at: Date;
}
