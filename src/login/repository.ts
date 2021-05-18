import {EntityRepository, Repository} from 'typeorm';
import { User } from './entities/login.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User>{}
