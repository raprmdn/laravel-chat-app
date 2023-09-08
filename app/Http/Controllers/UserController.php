<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function search(Request $request)
    {
        $users = User::search($request->query('q'))->get();

        return response()->json([
            'query' => $request->query('q'),
            'data' => $users,
        ]);
    }
}
