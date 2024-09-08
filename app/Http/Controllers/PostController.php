<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Blog', [
            'posts' => Post::with('category', 'user')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $image = 'storage/' . $request->file('image')->store('postsImages', 'public');
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required',
            'image' => 'required|image',
        ]);

        Post::create([
            'user_id' => $request->user_id,
            'image' => $image,
            'title' => $request->title,
            'content' => $request->content,
            'category_id' => $request->category_id,
        ]);

        return redirect(route('admin', absolute: false));
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('SinglePost', [
            'post' => $post,
            'author' => User::get()->where('id', $post->user_id),
            'comments' => Comment::get()->where('post_id', $post->id)
        ]);
    //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
        if(auth()->user()->id !== $post->user->id){
            abort(403);
        }
        $image = 'storage/' . $request->file('image')->store('postsImages', 'public');
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required',
            'image' => 'required',
        ]);

        $post->image = $image;
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->category_id = $request->input('category_id');
        $post->save();

        return redirect(route('admin.posts', absolute: false));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
        $post->delete();
    }
}
