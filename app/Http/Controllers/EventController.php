<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$events = Events::paginate(50);
        $events=Event::all();
           // return view('events.index')->with('events',$events);
           return $events;
    }
    public function view()
    {
        return view('home');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       // return view('events.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'eventsname' => 'string|required',
            'eventstype' => 'string|required',
            'description' => 'string|required',
            'eventsdate' => 'date|required',
            'eventsvenue' => 'string|required',
            'eventsimage' => 'string|required',
            'videolink' => 'string',
        ]);
        $events=Event::create($data);
        return $events->id;
           // return redirect(route('events.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //dd($events);
      //  return view('events.edit',['events'=>$event]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        // $events->update($request->all());
        // $events->save();
        // return redirect(route('events.index'));
        $event=Event::find($id);
        $data = $request->validate([
            'eventsname' => 'string|required',
            'eventstype' => 'string|required',
            'description' => 'string|required',
            'eventsdate' => 'date|required',
            'eventsvenue' => 'string|required',
            'eventsimage' => 'string|required',
            'videolink' => 'string',
        ]);
        $event->update($data);
        $event->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event=Event::find($id);
        $event->delete();
        // $event->delete();
        //     return redirect(route('events.index'));
    }
}
