<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $users= User::all();
        return UserResource::collection($users);
    }
    public function store(StoreRequest $request){
        $data=$request->validated();
        $data["password"]=Hash::make($data["password"]);
        $user = User::where("email",$data["email"])->first();
        if($user){
            return response(["message"=>"Користувач з такою поштою існує"],403);
        }
        $user = User::create($data);
        return response()->json(['message'=>'success']);
    }
    public function update(User $user,UpdateRequest $request){
        $data=$request->validated();
        $user->update($data);
        return response()->json(['message'=>'success']);
    }
    public function destroy(User $user){
        $user->delete();
        return response()->json(['message'=>'success']);
    }
}
