import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../classes/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {

  movies: Movie[];
  
  constructor(private movieService:MoviesService) { 
    this.movies = this.movieService.getAllMovies();
  }

  ngOnInit() {
    console.table(this.movies);
  }

}
