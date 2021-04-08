import { Location } from '@angular/common';
import { MoviesService } from './../movies.service';
import { Movie } from './../classes/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

 movie: Movie
 

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService, 
    private location: Location
  ) 
  { 
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.moviesService.getMovie(Number(id));
  }

  ngOnInit(): void {
    //console.log('id',id);
  }

  back(){
    this.location.back();
  }

}
