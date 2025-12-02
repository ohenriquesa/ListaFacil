import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class Produtos implements OnInit {

  lista: any[] = [];
  novoItem: string = '';

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.produtosService.listar().subscribe((dados: any[]) => {
      this.lista = dados;
    });
  }

  adicionar() {
    if (!this.novoItem.trim()) return;

    const novo = {
      nome: this.novoItem,
      concluido: false
    };

    this.produtosService.criar(novo).subscribe(() => {
      this.novoItem = '';
      this.carregarLista();
    });
  }

  concluir(item: any) {
    const atualizado = {
      ...item,
      concluido: !item.concluido
    };

    this.produtosService.atualizar(item.id.toString(), atualizado).subscribe(() => {
      this.carregarLista();
    });
  }

  excluir(id: any) {
    this.produtosService.deletar(id.toString()).subscribe(() => {
      this.carregarLista();
    });
  }

}
