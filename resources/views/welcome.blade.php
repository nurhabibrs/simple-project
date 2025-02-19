<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Kopi Benie</title>
        <link rel="icon" href="{{ asset('images/logo.png') }}">

        <!-- Styles / Scripts -->
        @vitereactrefresh
        @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
