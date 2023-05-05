<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Image;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class   PostsController extends Controller
{
    public function index(){
        $data=\request()->validate(
            ['page'=>'integer']
        );
        $posts = Post::paginate(5,['*'],'page',$data['page']);
        return PostResource::collection($posts);
    }
    public function checkUserLiked(){
        $isLiked=auth()->user()->likedPosts;
        return $isLiked;
    }
    public function checkUserSaved(){
        $isSaved=auth()->user()->savedPosts;
        return $isSaved;
    }
    public function store(StoreRequest $request){
        $data=$request->validated();
        $images=$data['images'];
        unset($data['images']);
        $post=Post::create($data);
        foreach ($images as $image){
            $imageName=md5(Carbon::now().'_'.$image->getClientOriginalName()). '.' . $image->getClientOriginalExtension();
            $filePath= Storage::disk('public')->putFileAs('/images',$image,$imageName);
            $previewName='prev_'.$imageName;
            Image::create([
                'path'=>$filePath,
                'url'=>url('storage/'.$filePath),
                'preview_url'=>url('storage/images/'.$previewName),
                'post_id'=>$post->id
            ]);
            \Intervention\Image\Facades\Image::make($image)
                ->fit(100,100)
                ->save(storage_path('app/public/images/'.$previewName));
        }
        return response()->json(['message'=>'image successfully uploaded']);

    }
}
