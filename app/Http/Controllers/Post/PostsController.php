<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function store(){
        dump(\request()->all());
        return 1;

    }
}
