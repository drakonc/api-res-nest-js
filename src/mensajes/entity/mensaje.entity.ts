import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mensaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nick: string;

  @Column()
  mensaje: string;
}
