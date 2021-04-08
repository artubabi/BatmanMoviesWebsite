import { IMovie } from './../interfaces/IMovie';

export class Movie implements IMovie
{
  id: Number;
  path: String;
  title: String;
  year: Number;
  description?: String;

  constructor(id:Number,path:String, title:String, year:Number, description?:String)
  {
    this.id = id;
    this.path = path;
    this.title = title;
    this.year = year;
    this.description = description;
  }


}