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
            'post_id'=>'required|integer',
        ]);
        $data['user_id']=auth()->user()->id;
        Comment::create($data);
        return $data;
    }
    public function destroy($postId,Comment $comment){
        $comment->delete();
        return $comment;
    }
    public function update($postId,Comment $comment){
        $data=\request()->validate([
            'content'=>'required|string',
        ]);
        $comment->update($data);
        return response()->json('success');
    }
}
