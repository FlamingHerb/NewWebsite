<script>

    const d = new Date();
    let year = d.getFullYear();
    
    let authorimg = "/images/witch.png";
</script>

<head>
    <title>Home | Vaccaria's Website</title>
</head>

<div class="container wrapper column-direction">
    <figure id="authorimg">
        <img src="{authorimg}" alt="A witch profile.">
    </figure>
    <h1>Hi, I'm Omi!</h1>
    <p>Game developer. Game enthusiast. Software developer. Creative Writer. Learner. Reader. Lover. Leader.</p>
    <p>Learn more about me either by clicking here or back up.</p>
</div>

<style lang="scss">
    @import "../node_modules/rfs/scss";

    .section {
        
        min-width: 85%;
        max-width: 85%;
        margin-left: 1.2em;
        margin-right: 1.2em;

        p {
            @include font-size(1rem);
        }
    }

    .img-cool {
        margin: auto;
        margin-top: 3em;
        max-width: 75%;
        padding-right: 2em;
    }

    .under-construction {
        @include font-size(2rem);
    }
    
</style>