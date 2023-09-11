<?php

namespace App\Providers;

use App\Helpers\Helper;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Broadcast::channel('online-users', function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'uuid' => $user->uuid,
                'last_seen_at' => Helper::userLastActivityStatus($user->last_seen_at),
            ];
        });
    }
}
