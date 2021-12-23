<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  protected $fillable = [
    'name',
    'email',
    'password'
  ];
  protected $hidden = [
    'password', 'remember_token', 'email', 'email_verified_at', 'created_at', 'updated_at', 'is_admin',
    'locale'
  ];


  public function image()
  {
    return $this->morphOne(Image::class, 'imageable');
  }

  protected $casts = [
    'email_verified_at' => 'datetime',
  ];
}
