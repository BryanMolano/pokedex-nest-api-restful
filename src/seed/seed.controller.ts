import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { CreatePokemonDto } from '../pokemon/dto/create-pokemon.dto';

@Controller('seed')
export class SeedController
{
  constructor(private readonly seedService: SeedService)
  {
  }

  @Get()
  executeSeed()
  {
    return this.seedService.executeSeed();
  }

}
