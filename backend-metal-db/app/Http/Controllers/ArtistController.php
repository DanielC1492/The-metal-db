<?php

namespace App\Http\Controllers;
use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class ArtistController extends Controller
{
    public function createArtist(Request $request){
        $name = $request->input('name');
        $image = $request->input('image');
        $genre = $request->input('genre');
        $country = $request-> input('country');

     try{
         return [ 'Success'=>'Artist Added!!',Artist::create([
             'name' => $name,
             'image' => $image,
             'genre' => $genre,
             'country'=>$country
         ])];
         } catch (QueryException $error){
         return $error;
        }
    }

    public function getAllArtists() {
        try {

            return Artist::all();
       
        } catch (QueryException $error){
            return $error;
        }
    }

    public function getArtistById($id) {
        try {

            return Artist::all()->where('id', '=', $id)
            ->keyBy('id');
       
        } catch (QueryException $error){
            return $error;
        }
    }

    public function getArtistByName($name) {
        try {

            return Artist::all()->where('id', '=', $name)
            ->keyBy('id');
       
        } catch (QueryException $error){
            return $error;
        }
    }

    public function getArtistByGenre($genre) {
        try{

            return Artist::all()->where('id', '=', $genre)
            ->keyBy('id');

        }catch (QueryException $error){
            return $error;
        }       
    }

    public function getArtistByCountry($country) {
        try{

            return Artist::all()->where('id', '=', $country)
            ->keyBy('id');

        }catch (QueryException $error){
            return $error;
        }       
    }

    public function updateArtist(Request $request){
        
        $name = $request->input('name');
        $image = $request-> input('image');
        $genre = $request-> input('genre');
        $country = $request-> input('country');
        
        $artistId = $request->input('id');
        try{

        return [Artist:: where('id','=',$artistId)->update(
            [
                'name' => $name,
                'image' =>$image,
                'genre' =>$genre,
                'country'=>$country
            ]),'Success'=>"Artist updated successfully"];
       }catch(QueryException $error){
        return $error;
     }
    }

    public function deleteArtist(Request $request){

        $artistId = $request->input('id');

        try{
              return ['Success'=>'Artist deleted succesfully',Artist::where('id','=',$artistId)->delete()];
   
        }catch(QueryException $error){
           return $error;
        }
       }

}
