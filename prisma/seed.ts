import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        nome: "Reserva da Família",
        descricao: "Torra média. Notas de chocolate amargo, caramelo e amêndoa torrada. Acidez suave, corpo cheio.",
        preco: 32.90,
        categoria: "Café em grãos",
        badge: "Gourmet",
        emoji: "☕",
        imagem: "assets/cafe-reserva-familia.svg",
        estoque: 50,
      },
      {
        nome: "Vale D'ouro Especial",
        descricao: "Processo natural, colheita seletiva manual. Notas frutadas de cereja e jasmim, acidez vibrante.",
        preco: 38.90,
        categoria: "Café moído",
        badge: "Especial",
        emoji: "🌿",
        imagem: "assets/cafe-vale-douro.svg",
        estoque: 40,
      },
      {
        nome: "Montanha Dourada",
        descricao: "Altitude 1.200m, torra clara. Notas de mel, pêssego e flores brancas.",
        preco: 36.90,
        categoria: "Café em grãos",
        badge: "Gourmet",
        emoji: "🏔️",
        imagem: "assets/cafe-montanha-dourada.svg",
        estoque: 35,
      },
      {
        nome: "Colheita Natural",
        descricao: "100% orgânico, sem agrotóxicos. Sabor suave, adocicado, com finalzinho de baunilha.",
        preco: 42.90,
        categoria: "Café moído",
        badge: "Orgânico",
        emoji: "🌸",
        imagem: "assets/cafe-colheita-natural.svg",
        estoque: 30,
      },
      {
        nome: "Bule de Cerâmica Raiz",
        descricao: "Bule artesanal em cerâmica nacional, 600ml. Feito à mão por artesãs de Minas Gerais.",
        preco: 89.90,
        categoria: "Utensílios",
        badge: "Novo",
        emoji: "🫖",
        imagem: "assets/bule-ceramica.svg",
        estoque: 20,
      },
      {
        nome: "Coador de Pano Artesanal",
        descricao: "Coador de pano 100% algodão orgânico, reutilizável. Suporte em bambu.",
        preco: 48.90,
        categoria: "Utensílios",
        badge: "Novo",
        emoji: "🔻",
        imagem: "assets/coador-pano.svg",
        estoque: 25,
      },
      {
        nome: "Filtros de Papel Especial",
        descricao: "Pack com 100 filtros sem cloro. Compatíveis com V60, Melitta e Chemex.",
        preco: 24.90,
        categoria: "Utensílios",
        badge: "Novo",
        emoji: "⭕",
        imagem: "assets/filtros-papel.svg",
        estoque: 100,
      },
      {
        nome: "Kit Café da Tarde",
        descricao: "Reserva da Família 250g + Bule de Cerâmica + Coador de Pano + cartão escrito à mão.",
        preco: 149.90,
        categoria: "Kits",
        badge: "Kit presente",
        emoji: "🎁",
        imagem: "assets/kit-presente.svg",
        estoque: 15,
      },
    ],
  });
  console.log("✅ Produtos cadastrados!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());