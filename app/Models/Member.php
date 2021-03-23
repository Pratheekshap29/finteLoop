<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $table='members';
    protected $fillable=['id','name','branch','usn','projects','skills','mimage'];
    protected $primaryKey='id';
    protected $dates=['created_at','updated_at'];

//     public function user(){
//        return $this->belongsTo('App\User');
//    }
}
