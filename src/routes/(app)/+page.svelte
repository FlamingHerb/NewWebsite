<script>

    

    const d = new Date();
    let year = d.getFullYear();
    
    let authorimg = "/images/witch.png";
</script>

<head>
    <title>Home | Vaccaria's Website</title>
</head>

<div class="container wrapper rrow-direction">
    <div id="right-side">
        <figure id="authorimg">
            <img src="{authorimg}" alt="A witch profile.">
        </figure>
    </div>
    <div id="left-side" class="section">
        <h1 class="title-holder">Hi, I'm Michael Sean Brian B. Omisol!</h1>
        <p>I am a 3rd Year BS CS Student at the University of the Philippines — Diliman. I am highly passionate towards game development, having experienced and enjoyed it at a young age. Because of the following, I have learned from the trade and applied it to my academics, now interested in Web and Software Development, Computer Security and Artificial Intelligence.</p>
        <p>Take a look at my works. You can check my About Me for a more detailed introduction as well as my formal experience. Until later.</p>
    </div>
    
</div>

<style lang="scss">
    @import "../node_modules/rfs/scss";

    #left-side {
        width: 600px;
        justify-content: center;
    }
    #right-side {
        display: flex;
        width: 348px;
        justify-content: center;

    }

    .section {
        padding: 14px;
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
    
    @media only screen and (max-width: 976px) {
    .title-holder {
        text-align: center;
    }
  }

</style>