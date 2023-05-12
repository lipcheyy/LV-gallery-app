<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\DataRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Category;
use App\Models\Image;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getSavedPosts()
    {
        $savedPosts=auth()->user()->savedPosts()->orderByDesc('id')->get();
        return PostResource::collection($savedPosts);
    }
    public function getOwnPosts(){
        $ownPosts=auth()->user()->posts()->orderByDesc('id')->get();
        return PostResource::collection($ownPosts);
    }
    public function getData(){
        $categoriesCount=Category::count();
        $usersCount=User::count();
        $postsCount=Post::count();
        $imagesCount=Image::count();
        $data = [
            'categoriesCount' => $categoriesCount,
            'usersCount' => $usersCount,
            'postsCount' => $postsCount,
            'imagesCount'=>$imagesCount
        ];
        return response()->json($data);
    }
}
