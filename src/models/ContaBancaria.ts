// src/models/ContaBancaria.ts
import { Usuario } from './Usuario';

export class ContaBancaria {
  #saldo: number;
  #titular: Usuario;

  constructor(usuario: Usuario) {
    this.#saldo = 0;
    this.#titular = usuario
  }

  depositar(valor: number) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor: number) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
    }
  }

  verSaldo(): string {
    return `O usuário ${this.#titular.verNome()} possui um saldo de: ${this.#saldo}`;
  }
}
