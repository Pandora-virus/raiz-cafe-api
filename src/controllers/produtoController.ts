import { Request, Response } from "express";
import prisma from "../prisma";

export async function listarProdutos(req: Request, res: Response) {
  const produtos = await prisma.produto.findMany({ where: { ativo: true } });
  res.json(produtos);
}

export async function buscarProduto(req: Request, res: Response) {
  const { id } = req.params;
  const produto = await prisma.produto.findUnique({ where: { id: Number(id) } });
  if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
  res.json(produto);
}

export async function criarProduto(req: Request, res: Response) {
  const { nome, descricao, preco, categoria, badge, emoji, imagem, estoque } = req.body;
  const produto = await prisma.produto.create({
    data: { nome, descricao, preco, categoria, badge, emoji, imagem, estoque },
  });
  res.status(201).json(produto);
}

export async function atualizarProduto(req: Request, res: Response) {
  const { id } = req.params;
  const produto = await prisma.produto.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(produto);
}

export async function deletarProduto(req: Request, res: Response) {
  const { id } = req.params;
  await prisma.produto.update({
    where: { id: Number(id) },
    data: { ativo: false },
  });
  res.status(204).send();
}
