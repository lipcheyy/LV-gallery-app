<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'images'=>'required|array',
            'title'=>'required|string',
            'category_id'=>'required|integer',
            'user_id'=>'integer'
        ];
    }
    public function messages()
    {
        return [
            'images.required'=>response()->json(['error'=>'no image']),
            'title.required'=>response()->json(['error'=>'no title']),
        ];
    }
}
