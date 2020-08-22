import { Injectable, NotFoundException } from '@nestjs/common';
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
}
