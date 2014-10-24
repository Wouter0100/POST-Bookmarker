<!DOCTYPE html>
<html>
<head>
    <title>Page redirection</title>
    <link rel="icon" href="https://getfavicon.appspot.com/<?php echo urldecode($_GET['url']); ?>" type="image/x-icon" />
</head>
<body>
    <?php

    $payload = json_decode($_GET['payload']);

    echo '<form action="' . urldecode($_GET['url']) . '" method="POST">';

    foreach ($payload as $name => $value) {
        echo '<input type="hidden" name="' . $name . '" value="' . $value . '">';
    }

    echo '</form>';

    ?>

    <script>
        document.getElementsByTagName('form')[0].submit();
    </script>
</body>
</html>