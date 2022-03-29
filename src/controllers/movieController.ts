import { Request, Response } from "express";

import { MovieModel } from "../models/Movie";

import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  const isExist = await MovieModel.findOne({ title: req.body.title });
  if (isExist) return res.status(401).send("Filme já existe");
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no createMovie ${e.message}`);
    return res.status(400).send(`Erro: ${e.message}`);
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }

    return res.status(200).send(movie);
  } catch (e: any) {
    Logger.error(`Erro ao encontrar filme: ${e.message}`);
  }
}

export async function allMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find({});

    return res.status(200).send(movies);
  } catch (e: any) {
    Logger.error(`Erro ao listar todos os filmes: ${e.message}`);
  }
}

export async function deleteMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findByIdAndDelete(id);

    if (!movie) {
      return res
        .status(404)
        .send("Não foi possivel encontar o filme para apaga-lo");
    }

    res.status(200).send("Filme apagado com sucesso");
  } catch (e: any) {
    Logger.error(`Erro ao listar todos os filmes: ${e.message}`);
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;

    const movie = await MovieModel.findByIdAndUpdate(id, data);

    if (!movie) {
      return res.status(404).send("Filme não encontrado para atualizar");
    }

    return res.status(200).send("Filme atualizado com sucesso");
  } catch (e: any) {
    Logger.error(`Erro ao atualizar filme: ${e.message}`);
  }
}
