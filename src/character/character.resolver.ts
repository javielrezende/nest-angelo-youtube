import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Character } from './character.entity';
import { CharacterService } from './character.service';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
@Resolver('Character')
export class CharacterResolver {
  constructor(
    private characterService: CharacterService
  ) {}

  @Query(() => [Character])
  async chars(): Promise<Character[]> {
    const chars = await this.characterService.findAllChars();
    return chars;
  }

  @Query(() => Character)
  async char(
    @Args('id') id: string): Promise<Character>{
      const char = this.characterService.findCharById(id);
      return char;
    }


  @Mutation(() => Character)
  async createCharacter(
    @Args('data') data: CreateCharacterInput
  ): Promise<Character> {
    const char = await this.characterService.createCharacter(data);
    return char;
  }

  @Mutation(() =>Character)
  async updateCharacter(
    @Args('id') id: string,
    @Args('data') data: UpdateCharacterInput
  ): Promise<Character> {
    const char = this.characterService.updateCharacter(id, data);
    return char;
  }

}
