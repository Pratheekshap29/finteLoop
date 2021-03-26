<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Event;
use App\Models\News;
use App\Models\Project;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
   
    public function membersFunc()
    {
        $members=Member::all();
        
        return $members;
    }

    public function newsFunc()
    {
        
        $news=News::all();
       
        return $news;
    }
    public function projectsFunc()
    {
        $projects=Project::all();
        return $projects;
          //  return view('projects.index')->with('projects',$projects);
    }
    public function eventsFunc()
    {
        //$events = Events::paginate(50);
        $events=Event::all();
           // return view('events.index')->with('events',$events);
           return $events;
    }

}
