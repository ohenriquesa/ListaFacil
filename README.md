# ListaFácil — Seu checklist simples para suas compras de Mercado!

O **ListaFácil** é um aplicativo simples desenvolvido em **Angular**, que permite criar listas de compras/tarefas rapidamente.  
O usuário pode:

- Adicionar itens  
- Marcar como concluído  
- Excluir itens  
- Clicar em um item para abrir uma tela de detalhes
- Tudo salvo em um **JSON Server (API fake)**  

## Telas



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
