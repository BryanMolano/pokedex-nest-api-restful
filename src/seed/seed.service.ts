import { Get, Inject, Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { CreatePokemonDto } from '../pokemon/dto/create-pokemon.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokemonService } from '../pokemon/pokemon.service';
import { AxiosAdapter } from '../common/adapters/axios.adapter';


@Injectable()
export class SeedService
{

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  )
  {
  }

  async executeSeed()
  {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonsToInsert: {
      name: string,
      no: number
    }[] = [];
    data.results.forEach(({ name, url }) =>
    {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonsToInsert.push({ name, no });
    });
    await this.pokemonModel.insertMany(pokemonsToInsert);


    return data.results;
  }
}
