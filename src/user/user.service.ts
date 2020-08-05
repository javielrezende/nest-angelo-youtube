import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

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

    async create(data: CreateUserInput): Promise<User> {
        const user = this.userRepository.create(data);
        const userSaved = await this.userRepository.save(user);
        
        if(!userSaved) {
            throw new InternalServerErrorException('Problem to create a user. Try again');
        }

        return userSaved;
    }

    async updateUser(id: string, data: UpdateUserInput): Promise<User> {
        const user = await this.findById(id);

        await this.userRepository.update(user, { ...data });

        const userUpdated = this.userRepository.create({ ...user, ...data })
        
        return userUpdated;
    }
}
