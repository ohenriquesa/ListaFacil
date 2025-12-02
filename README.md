# ListaFácil — Seu checklist simples para suas compras de Mercado!

O **ListaFácil** é um aplicativo simples desenvolvido em **Angular**, que permite criar listas de compras/tarefas rapidamente.  
O usuário pode:

- Adicionar itens  
- Marcar como concluído  
- Excluir itens  
- Clicar em um item para abrir uma tela de detalhes
- Tudo salvo em um **JSON Server (API fake)**  

## Telas
<img width="886" height="407" alt="Home" src="https://github.com/user-attachments/assets/cdb1c9af-85c1-48ff-ab4f-df420482aa7d" />
<img width="873" height="405" alt="Produtos" src="https://github.com/user-attachments/assets/23683ca9-fe80-4f7f-b187-ca33b35f77c5" />
<img width="865" height="406" alt="ProdutosLista" src="https://github.com/user-attachments/assets/9354be17-7a9a-4e6d-9196-2238cdd3c62f" />
<img width="868" height="403" alt="Descrição" src="https://github.com/user-attachments/assets/2e8c42d6-9135-41ac-b771-1ca7fab838a3" />
<img width="875" height="403" alt="Sobre" src="https://github.com/user-attachments/assets/a28cc65b-4c2b-4041-a76b-50a1c3ad4e34" />

# Como rodar o projeto

## Pré-requisitos

- Node.js instalado  
- Angular CLI instalado  
- JSON Server instalado  

### Instalar Angular CLI:

```
npm install -g @angular/cli
```

### Instalar JSON Server:

```
npm install -g json-server
```

---

# ▶ Iniciar o Backend (JSON Server)

Na raiz do projeto (onde está o `db.json`), execute:

```
json-server --watch db.json
```

Isso iniciará a API fake em:

```
http://localhost:3000
```

---

# ▶ Iniciar o Frontend (Angular)

Na pasta do projeto, execute:

```
ng serve --open
```

O Angular abrirá automaticamente em:

```
http://localhost:4200
```

---

# Autores

Projeto desenvolvido por **Alison Medeiros** e **Henrique Sá** para o Projeto Final da disciplina de Front-end.
