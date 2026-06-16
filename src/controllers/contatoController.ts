import { Request, Response } from "express";
import prisma from "../prisma";

export async function criarContato(req: Request, res: Response) {
  const { nome, email, celular, assunto, mensagem } = req.body;
  const contato = await prisma.contato.create({
    data: { nome, email, celular, assunto, mensagem },
  });
  res.status(201).json({ mensagem: "Mensagem enviada com sucesso!", contato });
}

export async function listarContatos(req: Request, res: Response) {
  const contatos = await prisma.contato.findMany({
    orderBy: { criadoEm: "desc" },
  });
  res.json(contatos);
}
