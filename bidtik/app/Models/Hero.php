<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $fillable = ['judul', 'gambar', 'deskripsi', 'urutan'];
    protected $table = 'hero';

}
