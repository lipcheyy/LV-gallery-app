<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(
    ['namespace'=>'User',
     'prefix'=>'users'],
    function (){
        Route::post('/registration','StoreController');
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('me', 'AuthController@me');
    Route::post('refresh', 'AuthController@refresh');
    Route::group(['middleware'=>'jwt.auth'],function (){
        //лише для авторизованих

        Route::group(['namespace' => 'Personal'], function () {
            Route::post('personal','IndexController');
        });
        Route::group(['namespace'=>'Admin','prefix'=>'/admin'], function () {
            Route::group(['namespace' => 'Category'], function () {
                Route::get('/category','CategoryController@index');
                Route::post('/category', 'CategoryController@store');
                Route::patch('/category/{category}','CategoryController@update');
                Route::delete('/category/{category}','CategoryController@destroy');
            });
            Route::group(['namespace' => 'User', 'prefix' => 'users'], function () {
                Route::post('/','UserController@store');
                Route::get('/','UserController@index');
                Route::get('/roles','UserController@getRoles');
                Route::patch('/{user}','UserController@update');
                Route::delete('/{user}','UserController@destroy');
            });
        });
        Route::group(['namespace' => 'User', 'prefix' => 'user'], function () {
            Route::post('/userdata','DataController');
        });
        Route::group(['namespace'=>'Post','prefix'=>'posts'],function () {
            Route::post('/', 'PostsController@store');
            Route::post('/list', 'PostsController@index');
            Route::group(['namespace' => 'Like', 'prefix' => '{post}/likes'], function () {
                Route::post('/','LikeController@store');
            });
        });
    });

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
});

