import { Module } from '@nestjs/common';
import { CharacterClassService } from './characterClass.service';
import { CharacterClassResolver } from './characterClass.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterClass } from './characterClass.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterClass])],
  providers: [CharacterClassService, CharacterClassResolver]
})


export class CharacterClassModule { }