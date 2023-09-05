<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        $users = User::query()
            ->where('id', '!=', auth()->id())
            ->get();

        return inertia('Chat/Index', [
            'users' => UserCollection::make($users),
        ]);
    }

    public function show(User $user)
    {
        if ($user->id === auth()->id()) {
            return redirect()->route('chat.index');
        }

        $users = User::query()
            ->where('id', '!=', auth()->id())
            ->get();
        UserResource::withoutWrapping();

        return inertia('Chat/Show', [
            'users' =>  UserCollection::make($users),
            'user' => UserResource::make($user),
        ]);
    }
}
