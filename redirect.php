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