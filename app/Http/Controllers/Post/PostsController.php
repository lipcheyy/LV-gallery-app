<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function store(StoreRequest $request){
        $data=$request->validated();
        dump($data);
        return 1;

    }
}
