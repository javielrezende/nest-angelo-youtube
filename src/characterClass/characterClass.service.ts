import { Injectable, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterClass } from './characterClass.entity';
import { Repository } from 'typeorm';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
@Injectable()
export class CharacterClassService {
    constructor(
        @InjectRepository(CharacterClass)
        private characterClassRepository:
            Repository<CharacterClass>
    ) { }

    async findAllChars(): Promise<CharacterClass[]> {
        const chars = await this.characterClassRepository.find()
        if (!chars) {
            throw new NotFoundException("Sem usuários!")
        }
        return chars;
    }

    async findCharById(id: string):
    Promise<CharacterClass>{
        const char = await this.characterClassRepository.findOne(id);
        if(!char){
            throw new NotFoundException('Character not found!')
        }
        return char;
    }

    async createCharacterClass(data: CreateCharacterClassInput): Promise<CharacterClass>{
        const characterClass = this.characterClassRepository.create(data);
        const characterClassSaved = await this.characterClassRepository.save(char)

        if(!characterClassSaved) {
            throw new InternalServerErrorException('Problem to create a character. try again please!')
        }

        return charSaved;
    }


}
