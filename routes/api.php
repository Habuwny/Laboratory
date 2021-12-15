<?php

//use App\Http\Controllers\API\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
AUTH ROUTES
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
