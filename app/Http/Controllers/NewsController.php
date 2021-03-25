<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
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
        //$news = News::paginate(50);
        $news=News::all();
        // if ($request->wantsJson()) {
        //     return $news;
        // }
        // else{
            //return view('news.index')->with('news',$news);
        //}
        return $news;
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
        //return view('news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //error_log("hi");
        $data = $request->validate([
            
            'newshead' => 'string|required',
            'description' => 'string|required',
            'newdate' => 'date|required',
            'flyer' => 'string|required'
        ]);
       // error_log($data);
           
            $news=News::create($data);
            //return redirect(route('news.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        // if ($request->wantsJson()) {
        //     return $news;
        // }
        // else{
        //     return redirect()->route('news.show', [$id]);
        // }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        //dd($news);
       // return view('news.edit',['news' => $news]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $news=News::find($id);

        $data = $request->validate([
            
            'newshead' => 'string|required',
            'description' => 'string|required',
            'newdate' => 'date|required',
            'flyer' => 'string|required'
        ]);


        $news->update($data);
        $news->save();
        //return redirect(route('news.index'));
   // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // $x=News::findorfail($news);
       // $delete = News::where('id', '=', $news)->delete();
       $news=News::find($id);
       $news->delete();
    
        
       // if($news == true){
       //     $request->session()->flash('status','success');
       //     $request->session()->flash('message','News deleted successfully!');
       //     }
       //     else
       //     {
       //         $request->session()->flash('status','danger');
       //         $request->session()->flash('message','An error occured!!!'); 
       //     }
       //     // 
          // return redirect(route('news.index'))->with('message','News deleted succesffuly')->with('status','success');
    }
}
