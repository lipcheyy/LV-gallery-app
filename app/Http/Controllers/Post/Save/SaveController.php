<?php

namespace App\Http\Controllers\Post\Save;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class SaveController extends Controller
{
    public function store(Post $post){
        auth()->user()->savedPosts()->toggle($post->id);
        return response()->json(['message'=>'saved']);
    }
}
