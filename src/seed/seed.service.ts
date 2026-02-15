import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class SeedService
{
  @Get()
  executeSeed()
  {
    return 'Seed executed';
  }
}
