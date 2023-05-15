<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    const ROLE_ADMIN=1;
    const ROLE_GUEST=0;
    public static function getRole(){
        return [
            self::ROLE_ADMIN=>'Admin',
            self::ROLE_GUEST=>'Guest',
        ];
    }
    public function likedPosts(){
        return $this->belongsToMany(Post::class,
            'post_user_likes',
            'user_id',
            'post_id');
    }
    public function savedPosts(){
        return $this->belongsToMany(Post::class,
            'post_user_saves',
            'user_id',
            'post_id');
    }
    public function posts(){
        return $this->hasMany(Post::class);
    }
    public function avatar(){
        return $this->hasMany(Avatar::class);
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
