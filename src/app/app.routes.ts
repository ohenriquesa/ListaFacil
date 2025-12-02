import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { ProdutoDetalhe } from './pages/produto-detalhe/produto-detalhe';
import { Sobre } from './pages/sobre/sobre';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'produtos/:id', component: ProdutoDetalhe },
  { path: 'sobre', component: Sobre },
  { path: '**', component: NotFound }
];
