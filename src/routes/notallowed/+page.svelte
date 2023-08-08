<script>
    // Disallows other users to access site... for now.
    import { PUBLIC_CURRENT_MODE } from '$env/static/public';
    let error_message = "Page not found. Take your medicine and try again.";
    if (PUBLIC_CURRENT_MODE == "development") {
        error_message = "Yeah, you're not allowed to see this. Sorry :(";
    }
  
  </script>

<head>
    <title>ACCESS DENIED.</title>
</head>

<div id="containerbody">
    <center>
        <img src="/images/Anti_climb_paint_sign.webp" alt="Anti Climbing Paint">
        <h1>{error_message}</h1>
    </center>
</div>


<style lang="scss">
    @import "../node_modules/rfs/scss";
    h1 {
        @include font-size(2rem);
    }
    img {
        max-width: 60%;
    }

    div {
        padding: 1em 0px;
    }
</style>