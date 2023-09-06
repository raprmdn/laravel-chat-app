<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'sender_id' => $this->sender_id,
            'receiver_id' => $this->receiver_id,
            'reply' => $this->whenLoaded('reply', function () {
                return new MessageResource($this->reply);
            }),
            'message' => $this->message_deleted_at? 'This message has been deleted' : $this->message,
            'seen_at' => $this->seen_at?->format('Y-m-d H:i:s'),
            'message_deleted_at' => $this->message_deleted_at?->format('Y-m-d H:i:s'),
            'sent_at' => $this->created_at?->format('H:i'),
        ];
    }
}
