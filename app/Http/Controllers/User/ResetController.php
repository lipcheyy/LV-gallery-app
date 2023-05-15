<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ResetRequest;
use Illuminate\Http\Request;

class ResetController extends Controller
{
    public function __invoke(ResetRequest $request)
    {
        $data=$request->validated();
        return $data;
    }
}
