import { model, Schema } from "mongoose";

export interface IMovie {
  title: string;
  rating: number;
  desc: string;
  director: string;
  stars: number[];
  poster?: string;
}

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  desc: { type: String, required: true },
  director: { type: String, required: true },
  stars: [{ type: Number, required: true }],
  poster: { type: String },
});

export const MovieModel = model<IMovie>("Movie", movieSchema);
