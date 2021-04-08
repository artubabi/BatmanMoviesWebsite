import { Movie } from './classes/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  private movies: Movie[] = [
    {id:0,path:'batman-begins', title:'Batman: Begins',year:2005, description:"First movie from batman movie sersies with Christian Bale in the main role. Movie is about beginnings of Gotham's defender."},
    {id:1,path:'batman-darkknight', title:'Batman: Dark Knight',year:2008, description:'Secound movie where Batman need to face one of the most unpredictable criminal who is called JOKER.'},
    {id:2,path:'batman-darkknight-rises', title:'Batman: Dark Knight Rises',year:2012, description:'Last movie from series where Batman is trying to protect Gotham from League of Shadow.'}
  ];

  constructor() { }

  getAllMovies(): Movie[]{
    return this.movies;
  }

  getMovie(id:number): Movie {
    return this.movies[id];
  }



}
