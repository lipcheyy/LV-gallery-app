<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Category;
use App\Models\Image;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class   PostsController extends Controller
{
    public function index()
    {
        $data = \request()->validate(
            ['page' => 'integer']
        );
        $posts = Post::orderByDesc('id')->paginate(12, ['*'], 'page', $data['page']);
        $dates = $posts->pluck('created_at')->map(function($date) {
            return Carbon::parse($date)->toIso8601String();
        });
        return PostResource::collection($posts);
    }
    public function update(StoreRequest $request){
        $data = $request->validated();
        $images = $data['images'];
        unset($data['images']);
        $data['user_id'] = auth()->user()->id;
        $post = Post::create($data);
        foreach ($images as $image) {
            $imageName = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
            $filePath = Storage::disk('public')->putFileAs('/images', $image, $imageName);
            $previewName = 'prev_' . $imageName;
            Image::create([
                'path' => $filePath,
                'url' => url('storage/' . $filePath),
                'post_id' => $post->id
            ]);

        }
        return response()->json(['message' => 'image successfully edited']);
    }
    public function postsByCategory(Category $category)
    {
        $posts = $category->posts()->orderByDesc('id')->get();
        return PostResource::collection($posts);
    }
    public function destroy(Post $post){
        $postImages=$post->images;
        foreach ($postImages as $postImage){
            Storage::disk('public')->delete($postImage->path);
            $postImage->delete();
        }
        $post->delete();
        return response()->json(['message'=>'deleted']);
    }
    public function checkUserLiked()
    {
        $isLiked = auth()->user()->likedPosts;
        return $isLiked;
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function checkUserSaved()
    {
        $isSaved = auth()->user()->savedPosts;
        return $isSaved;
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $images = $data['images'];
        unset($data['images']);
        $data['user_id'] = auth()->user()->id;
        $post = Post::create($data);
        foreach ($images as $image) {
            $imageName = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
            $filePath = Storage::disk('public')->putFileAs('/images', $image, $imageName);
            $previewName = 'prev_' . $imageName;
            Image::create([
                'path' => $filePath,
                'url' => url('storage/' . $filePath),
                'preview_url' => url('storage/images/' . $previewName),
                'post_id' => $post->id
            ]);
            \Intervention\Image\Facades\Image::make($image)
                ->fit(100, 100)
                ->save(storage_path('app/public/images/' . $previewName));
        }
        return response()->json(['message' => 'image successfully uploaded']);

    }
}
