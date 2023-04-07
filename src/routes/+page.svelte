<script>
</script>

<div class="container wrapper">
    <h1 class="under-construction">
        Hi, my name is Omi (of Vaccaria in the interwebs). The frontpage is currently under construction. So for now, enjoy this random picture of an emoji with sunglasses giving a thumbs up to everyone.
    </h1>
    <img class="img-cool" src="/images/coolbro.webp" alt="An emoji with sunglasses.">
    <p class="under-construction">
        If you want to check my works, go to <a href="/works">works</a>. If you want to know about me more, go to <a href="/aboutme">about me</a>.
    </p>
</div>

<style lang="scss">
    @import "../node_modules/rfs/scss";

    .wrapper {
        flex-wrap: wrap;
    }

    .img-cool {
        margin:auto;
        max-width: 75%;
        padding-right: 2em;
    }

    .under-construction {
        text-align: center;
        padding: 2em 0.5em;
        @include font-size(2rem);
    }
    
</style>