<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ResetRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    public function __invoke(ResetRequest $request)
    {
        $data=$request->validated();
        $data["password"]=Hash::make($data["password"]);
//        $credentials = [
//            'email' => $data['email'],
//            'password' => $data['old_password'],
//        ];
//        if (!auth()->attempt($credentials)) {
//            return response()->json(['message' => 'Incorrect old password'], 422);
//        }
        User::where('email',$data['email'])->update(['password'=>$data['password']]);
    }
}
