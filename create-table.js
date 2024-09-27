import { sql } from './db.js'

sql`
  CREATE TABLE doutores (
      id text PRIMARY KEY,
      nome character varying(255),
      idade character varying(255),
      areaFormacao character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})