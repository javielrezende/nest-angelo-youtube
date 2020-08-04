import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.find();        
        return users;
    }

    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);    
        if(!user) {
            throw new NotFoundException('User not found');
        }    
        return user;
    }
}
