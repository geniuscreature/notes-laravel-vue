<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Illuminate\Support\Facades\Auth;


class PostController extends Controller
{
    public function get()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $title = $request->input('title');
        $content = $request->input('content');
        $id = $request->input('id');

        $post = Post::create([
            'title' => $title,
            'id' => $id,
            'content' => $content,
            'user_id' => $user->id,
        ]);

        return response()->json($post);
    }

    public function delete($id)
    {
        Post::destroy($id);

        return response()->json("ok");
    }

    public function edit($id)
    {
        $post = Post::find($id);

        return response()->json($post);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $title = $request->input('title');
        $content = $request->input('content');
        $id = $request->input('id');

        $post = Post::find($id);

        $post -> update([
            'title' => $title,
            'id' => $id,
            'content' => $content,
            'user_id' => $user->id,
        ]);

        return response()->json($post);
    }
}
