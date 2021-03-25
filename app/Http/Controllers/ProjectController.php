<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
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
        $projects=Project::all();
        return $projects;
          //  return view('projects.index')->with('projects',$projects);
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
        //return view('projects.create');
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
            
            'title' => 'string|required',
            'link' => 'string|required',
            'description' => 'string|required',
            'pimage' => 'string|required'
        ]);
           
         
            $projects=Project::create($data);
           // return redirect(route('projects.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //return view('projects.edit',['projects' => $project]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $project=Project::find($id);

        $data = $request->validate([
            
            'title' => 'string|required',
            'link' => 'string|required',
            'description' => 'string|required',
            'pimage' => 'string|required'
        ]);


        $project->update($data);
        $project->save();
        //return redirect(route('projects.index'));
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //error_log("hi");
        $project=Project::find($id);
        $project->delete();
       // return redirect(route('projects.index'))->with('message','Projects deleted successfully')->with('status','success');
    }
}
