import { Module } from '@nestjs/common';
import { SeedersService } from './seeders.service';
import { SeedersController } from './seeders.controller';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedersController],
  providers: [SeedersService],
  imports: [PokemonsModule, CommonModule],
})
export class SeedersModule {}
