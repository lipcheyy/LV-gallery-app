<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded=false;
//    public function images(){
//        return $this->hasMany(Post::class,'post_id','id');
//    }
}
