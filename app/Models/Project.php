<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table='projects';
    protected $fillable=['id','title','link','description','pimage'];
    protected $primaryKey='id';
    protected $dates=['created_at','updated_at'];
    public function user(){
        return $this->belongsTo('App\User');
    }
}
