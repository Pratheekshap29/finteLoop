<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table='news';
   protected $fillable=['id','newshead','description','newdate','flyer'];
   protected $primaryKey='id';
   protected $dates=['created_at','updated_at'];

   public function user(){
      return $this->belongsTo('App\User');
  }
}
