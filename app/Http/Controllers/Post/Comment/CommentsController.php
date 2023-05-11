<?php

namespace App\Http\Controllers\Post\Comment;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function store(){
        $data=\request()->validate([
            'content'=>'required|string',
            'post_id'=>'required|string',
        ]);
        $data['user_id']=auth()->user()->id;
        Comment::create($data);
        return $data;
    }
}
