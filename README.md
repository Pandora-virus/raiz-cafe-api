# 🌱 Raiz Café API

API REST do projeto Raiz Café — uma loja de café artesanal de Diamantina, Minas Gerais.

## Tecnologias

- Node.js + TypeScript
- Express
- Prisma ORM (v6)
- MySQL
- Nodemon + ts-node

## Pré-requisitos

- Node.js 18+
- MySQL rodando localmente
- WSL (Ubuntu) ou Linux

## Instalação

```bash
git clone git@github.com:Pandora-virus/raiz-cafe-api.git
cd raiz-cafe-api
npm install
```

Configure o `.env`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/raiz_cafe"
JWT_SECRET="seu-secret"
PORT=3000
```

Rode as migrations e o seed:

```bash
npx prisma migrate dev
npx prisma db seed
```

Inicie o servidor:

```bash
npm run dev
```

## Endpoints

### Produtos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/produtos | Lista todos os produtos |
| GET | /api/produtos/:id | Busca produto por ID |
| POST | /api/produtos | Cria produto |
| PUT | /api/produtos/:id | Atualiza produto |
| DELETE | /api/produtos/:id | Desativa produto |

### Contato
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/contato | Envia mensagem de contato |
| GET | /api/contato | Lista mensagens recebidas |

## Próximos passos

- [ ] Autenticação JWT
- [ ] Painel admin
- [ ] Integração com Mercado Pago
- [ ] Deploy no Railway