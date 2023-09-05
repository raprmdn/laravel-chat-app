<?php

namespace App\Http\Controllers;

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
            'users' => UserResource::collection($users),
        ]);
    }

    public function show(User $user)
    {
        dd($user);
    }
}
