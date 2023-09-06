<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChatRequest;
use App\Http\Resources\MessageResource;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\Chat;

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

        $messages = Chat::query()
            ->where(fn($query) => $query->where('sender_id', auth()->id())->where('receiver_id', $user->id))
            ->orWhere(fn($query) => $query->where('sender_id', $user->id)->where('receiver_id', auth()->id()))
            ->with('reply')
            ->orderBy('created_at')
            ->get()
            ->groupBy(function ($message) {
                return $message->created_at->isToday() ? 'Today' : ($message->created_at->isYesterday() ? 'Yesterday' :
                    $message->created_at->format('F j, Y'));
            })
            ->map(function ($messages, $date) {
                return [
                    'date' => $date,
                    'messages' => MessageResource::collection($messages),
                ];
            })
            ->values()
            ->toArray();

        return inertia('Chat/Show', [
            'users' => UserCollection::make($users),
            'chat_with' => UserResource::make($user),
            'messages' => $messages
        ]);
    }

    public function chat(User $user, ChatRequest $request)
    {
         \Auth::user()->messages()->create([
             'receiver_id' => $user->id,
             'message' => $request->message,
             'reply_id' => $request->reply_id,
         ]);

        return redirect()->back();
    }
}
