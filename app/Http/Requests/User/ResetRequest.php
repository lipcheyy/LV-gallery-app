<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ResetRequest extends FormRequest
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
            'email'=>'required|exists:users,email',
            'old_password'=>'required',
            'password'=>'required',
            'password_confirm'=>'required',
        ];
    }
    public function messages()
    {
        return [
            'email.exists'=>'no matches'
        ];
    }
}
