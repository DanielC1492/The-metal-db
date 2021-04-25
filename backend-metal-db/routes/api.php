<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// User Methods

Route::post('/register', [UserController::class, 'registerUser']);
Route::get('/users', [UserController::class, 'getAllUsers']);
Route::get('/profile/{id}',[UserController::class, 'getUserById']);
Route::get('/profile/{nickname}',[UserController::class, 'getUserByNickname']);
Route::post('/login', [UserController::class, 'loginUser']);
Route::post('/logout', [UserController::class, 'logoutUser']);
Route::put('/user',[UserController::class, 'updateUser']);
Route::delete('/user',[UserController::class, 'deleteUser']); 

//Product Methods
