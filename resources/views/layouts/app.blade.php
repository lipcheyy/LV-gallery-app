<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://kit.fontawesome.com/b1158b9f9c.js" crossorigin="anonymous" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Homepage</title>
    <style>
        html,body{
            height: 100%;
        }
        .wrapperr{
            height: 100%;
            width: 100%;
        }
    </style>
</head>
<body>
<header></header>
<div id="app" class="wrapperr">
    @yield('content')
</div>
</body>
</html>
