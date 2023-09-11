<?php

namespace App\Helpers;

class Helper
{
    public static function userLastActivityStatus($timestamp): ?string
    {
        $lastSeenFormat = $timestamp?->isToday() ? "Last seen today at {$timestamp?->format('H:i')}" : ($timestamp?->isYesterday()
            ? "Last seen yesterday at {$timestamp?->format('H:i')}"
            : "Last seen at {$timestamp?->format('d/m/Y H:i')}"
        );

        return $timestamp?->gt(now()->subSeconds(5)) ? 'Online' : $lastSeenFormat;
    }
}
