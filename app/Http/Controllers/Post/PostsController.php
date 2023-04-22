<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use App\Models\Image;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostsController extends Controller
{
    public function index(){

    }
    public function store(StoreRequest $request){
        $data=$request->validated();
        $images=$data['images'];
        unset($data['images']);
        $post=Post::create($data);
        foreach ($images as $image){
            $imageName=md5(Carbon::now().'_'.$image->getClientOriginalName()). '.' . $image->getClientOriginalExtension();
            $filePath= Storage::disk('public')->putFileAs('/images',$image,$imageName);
            Image::create([
                'path'=>$filePath,
                'url'=>url('storage/'.$filePath),
                'post_id'=>$post->id
            ]);
        }
        return response()->json(['message'=>'image successfully uploaded']);

    }
}
