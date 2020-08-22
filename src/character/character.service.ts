import { Injectable, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './user.entity';
import { Repository } from 'typeorm';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private characterRepository:
            Repository<Character>
    ) { }

    async findAllChars(): Promise<Character[]> {
        const chars = await this.characterRepository.find()
        if (!chars) {
            throw new NotFoundException("Sem usuários!")
        }
        return chars;
    }

    async findCharById(id: string):
    Promise<Character>{
        const char = await this.characterRepository.findOne(id);
        if(!char){
            throw new NotFoundException('Character not found!')
        }
        return char;
    }

    async createCharacter(data: CreateCharacterInput): Promise<Character>{
        const char = this.characterRepository.create(data);
        const charSaved = await this.characterRepository.save(char)

        if(!userSaved) {
            throw new InternalServerErrorException('Problem to create a character. try again please!')
        }

        return charSaved;
    }

    async updateCharacter(id: string, data: UpdateCharacterInput): Promise<Character>{
        const char = await this.findCharById(id);
        
        await this.characterRepository.update(char, {...data});

        const charUpdated = this.characterRepository.create({ ...user, ...data});
        return charUpdated;
    }
}
