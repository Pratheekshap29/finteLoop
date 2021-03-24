<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\EventController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/members', [App\Http\Controllers\MemberController::class, 'index']);

Route::post('/members', [App\Http\Controllers\MemberController::class, 'store']);

Route::delete('/members/delete/{id}', [App\Http\Controllers\MemberController::class, 'destroy']);
//Route::('/members/{id}', [App\Http\Controllers\MemberController::class, 'edit']);
Route::any('/members/{id}', [MemberController::class, 'update']);

Route::get('/events', [App\Http\Controllers\EventController::class, 'index']);

Route::post('/events', [App\Http\Controllers\EventController::class, 'store']);

Route::delete('/events/delete/{id}', [App\Http\Controllers\EventController::class, 'destroy']);
//Route::('/members/{id}', [App\Http\Controllers\MemberController::class, 'edit']);
Route::any('/events/{id}', [EventController::class, 'update']);

Route::get('/app/{path?}', function(){
    return view('home'); //This view is supposed to have the react app above
});