<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded=false;
    public function images(){
        return $this->hasMany(Image::class,'post_id','id');
    }
    public function userCreated(){
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function likedUsers(){
        return $this->belongsToMany(User::class,
            'post_user_likes',
            'post_id',
            'user_id');
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }
    protected $withCount=['likedUsers'];
}
