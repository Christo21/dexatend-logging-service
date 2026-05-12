import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  action!: string; 

  @Column({ type: 'json', nullable: true })
  details!: any; 

  @CreateDateColumn()
  createdAt!: Date;
}