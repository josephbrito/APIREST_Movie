import { Router, Request as req, Response as res } from "express";
import {
  allMovies,
  createMovie,
  deleteMovie,
  findMovieById,
  updateMovie,
} from "./controllers/movieController";

const router = Router();

router.get("/test", (req: req, res: res) => {
  return res.status(200).send("API Working");
});

router.get("/movies", allMovies);

router.get("/movie/:id", findMovieById);

router.post("/movie", createMovie);

router.patch("/movie/:id", updateMovie);

router.delete("/movie/:id", deleteMovie);

export default router;
