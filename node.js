<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hero Section with Shadow</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="hero">
    <div class="hero-content">
        <h1>Your Hero Text Here</h1>
        <p>Some additional information or a catchy tagline goes here.</p>
    </div>
</div>

<style>
    body {
        margin: 0;
        font-family: 'Arial', sans-serif;
    }

    .hero {
        position: relative;
        height: 100vh;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('your-background-image.jpg') center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-align: center;
    }

    .hero-content {
        max-width: 800px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 3em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2em;
    }
</style>

</body>
</html>
