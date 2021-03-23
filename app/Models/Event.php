<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $table='events';
    protected $fillable =['id','eventsname','eventstype','description','eventsdate','eventsvenue','eventsimage','videolink'];
    protected $primaryKey='id';
    public $incrementing=true;
    //protected $with=['images'];
    protected $dates=['created_at','updated_at'];
    public $timestamps=true;

    public function user(){
        return $this->belongsTo('App\User');
    }
    // public function images()
    // {
    //     return $this->hasMany(EventImage::class, 'event_id');
    // }
}
