<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $members=Member::all();
        // return view('members.index')->with('members',$members);
        return $members;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       // return view('members.create');
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
            
            'name' => 'string|required',
            'branch' => 'string|required',
            'usn' => 'string|required',
            'projects' => 'string|required',
            'skills' => 'string|required',
            'mimage' => 'string|required'
        ]);
           
         
           $members=Member::create($data);
            //return redirect(route('members.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function show(Member $member)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function edit(Member $member)
    {
        //return view('members.edit',['members' => $member]);
        //return $member;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {

        $member=Member::find($id);
        // if($member->id)
        // {
        //     err
        // }
        //error_log($member);
       // error_log($request);
      // dd("hi");
        $data = $request->validate([
            
            'name' => 'string|required',
            'branch' => 'string|required',
            'usn' => 'string|required',
            'projects' => 'string|required',
            'skills' => 'string|required',
            'mimage' => 'string|required'
        ]);
       
        //$data['id']=$request->id;
        
        $member->update($data);
        
        $member->save();
        
       // return redirect(route('members.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        $member=Member::find($id);
        
        $member->delete();
        // $member->save();
        //return redirect(route('members.index'))->with('message','Member deleted successfuly!!')->with('status','success');
    }
}
