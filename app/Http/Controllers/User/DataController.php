<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\DataRequest;
use App\Http\Requests\User\DataUpdateRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Avatar;
use App\Models\Category;
use App\Models\Image;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
    public function update(User $user,DataUpdateRequest $request){
        $data=$request->validated();
        $avatar=$data['avatar']??null;
        unset($data['avatar']);
        $user->update($data);
        if ($avatar!='undefined'){
            $imageName = md5(Carbon::now() . '_' . $avatar->getClientOriginalName()) . '.' . $avatar->getClientOriginalExtension();
            $filePath = Storage::disk('public')->putFileAs('/avatars', $avatar, $imageName);
            Avatar::create([
                'path' => $filePath,
                'url' => url('storage/' . $filePath),
                'user_id' => $user->id
            ]);
        }
        return dump($data);
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
