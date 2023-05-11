<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\DataRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\User;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getSavedPosts()
    {
        $savedPosts=auth()->user()->savedPosts;
        return PostResource::collection($savedPosts);
    }
    public function getOwnPosts(){
        $ownPosts=auth()->user()->posts;
        return PostResource::collection($ownPosts);
    }
}
