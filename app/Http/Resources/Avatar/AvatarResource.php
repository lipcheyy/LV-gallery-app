<?php

namespace App\Http\Resources\Avatar;

use Illuminate\Http\Resources\Json\JsonResource;

class AvatarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'url'=>$this->url,
            'path'=>$this->path
        ];
    }
}
