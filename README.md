## Laravel Chat App

Laravel Chat App is a realtime chat application built with Laravel, Inertia JS, and React JS. This project is an example of how to implement realtime chat application in Laravel using Soketi.

Source code : [GitHub](https://github.com/raprmdn/laravel-chat-app)

### Tech Stack

- [Laravel](https://laravel.com/)
- [Inertia JS](https://inertiajs.com/)
- [React JS](https://reactjs.org/)
- [Soketi](https://docs.soketi.app/)

### Packages

- [pusher/pusher-php-server](https://laravel.com/docs/10.x/broadcasting)
- [laravel/scout](https://laravel.com/docs/10.x/scout)
- [laravel-echo](https://laravel.com/docs/10.x/broadcasting)
- [pusher-js](https://laravel.com/docs/10.x/broadcasting)

## Installation and Usage

Clone the repository

```bash
git clone https://github.com/raprmdn/laravel-chat-app
```

Go to the project directory

```bash
cd laravel-chat-app
```

Install dependencies

```bash
# composer
composer install

# npm
npm install
```

Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

Generate application key

```bash
php artisan key:generate
```

Run migration and seeder

```bash
# migration
php artisan migrate

# seeder
php artisan db:seed
```

> You must install <a href="https://docs.soketi.app/getting-started/installation/cli-installation" target="_blank">Soketi</a> globally before running the application.

Install Soketi

```bash
npm install -g @soketi/soketi
```

Run Soketi with custom configuration.

```bash
soketi start --config=soketi.config.json
```

Run the application

```bash
# Start the development server
php artisan serve

# Run React JS
npm run dev
```

## Screenshots

![Laravel Chat App Homepage](https://ik.imagekit.io/peqmgufll/content/laravel-chat-app.png?updatedAt=1694491872249)

![Laravel Chat App Search User](https://ik.imagekit.io/peqmgufll/content/laravel-chat-app-search-user.png?updatedAt=1694491872123)

![Laravel Chat App Send Message](https://ik.imagekit.io/peqmgufll/content/laravel-chat-app-send-message.png?updatedAt=1694491872273)

![Laravel Chat App Reply Message](https://ik.imagekit.io/peqmgufll/content/laravel-chat-app-reply-message.png?updatedAt=1694491872180)

![Laravel Chat App Reply and Delete Message](https://ik.imagekit.io/peqmgufll/content/laravel-chat-app-reply-and-delete-message.png?updatedAt=1694491872175)

![Laravel Chat App Preview](https://ik.imagekit.io/peqmgufll/content/laravel-chat-app-preview.gif?updatedAt=1694491874080)



