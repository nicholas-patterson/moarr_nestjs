import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1676741405517 } from 'src/migrations/1676741405517-CoffeeRefactor';
import { SchemaSync1676742082346 } from 'src/migrations/1676742082346-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1676741405517, SchemaSync1676742082346],
});
