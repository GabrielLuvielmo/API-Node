import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listDoutores() {
    const doutores = await sql`select * from doutores`;
    return doutores;
  }

  async createDoutores(doutores) {
    const id = randomUUID();
    console.log('id', id);
    const nome = doutores.nome;
    const idade = doutores.idade;
    const areaFormacao = doutores.areaFormacao;
    
    await sql`insert into doutores (id, nome, idade, areaFormacao)
    values (${id}, ${nome}, ${idade}, ${areaFormacao})`
  }

  async updateDoutores(id, doutores) {
    const nome = doutores.nome;
    const idade = doutores.idade;
    const areaFormacao = doutores.areaFormacao;

    await sql`update doutores set 
        nome = ${nome},
        idade = ${idade},
        areaFormacao = ${areaFormacao}
        where id = ${id}
    `;
  }

  async deleteDoutores(id) {
    await sql`delete from doutores where id = ${id}`
  }

}