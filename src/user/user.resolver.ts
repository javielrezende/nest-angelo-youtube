import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(
        private userService: UserService
    ){}

    @Query(() => [User])
    async users(): Promise<User[]> {
        const users = await this.userService.findAll();
        return users;
    }
}
