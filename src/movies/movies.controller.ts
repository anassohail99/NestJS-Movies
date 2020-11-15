import { CreateMovieDTO } from './DTO/create-movies.dto';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {


    constructor (private movieSrc : MoviesService){ } 
    @Get()
    async getMovies(){
        const movies = await this.movieSrc.getMovies()
        return movies;
    }

    @Get(":movieID")
    async getMovie(@Param('movieID') movieID){
        const movie = this.movieSrc.getMovie(movieID);
        return movie
    }

    @Post()
    async addMovie(@Body() createMovieDto:CreateMovieDTO){
        const movie = await this.movieSrc.addMovie(createMovieDto)
        return movie
    }

    @Delete()
    async deleteMovie(@Query() query){
        const movie = await this.movieSrc.deleteMovie(query.movieID)
        return movie;
    }
}
