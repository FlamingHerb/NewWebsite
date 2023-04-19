
<head>
    <title>About Me | Vaccaria's Website</title>
</head>

<div class="container wrapper column-direction">
    <h1>Games</h1>

    <div class="section">
        <img class="work-thumbs" src="images/works_thumbnail/placeholder.png" alt="Game profile thumbnail.">
        <h1>Project Unity</h1>
        <p>A murder-mystery set in a cold, dark world. This game is made for the partial fulfillment of the CS 192 class.</p>
    </div>

    <div class="section">
        <img class="work-thumbs" src="images/works_thumbnail/placeholder.png" alt="Game profile thumbnail.">
        <h1>-repent loci- useless apologies of a troublesome witch</h1>
        <p>She keeps doing weird things, they all claim she's a witch. Why does she keep it up, while apologizing?</p>
    </div>

    <div class="section">
        <img class="work-thumbs" src="images/works_thumbnail/placeholder.png" alt="Game profile thumbnail.">
        <h1>Sa Ilalim ng Gabi</h1>
        <p>A horror game taking the role of a priestess doing her best to avoid the chaos. This game is made for the partial fulfillment of the SCALE Program 2018-2020 and for the Theme Roulette 2 event.</p>
    </div>

    <div class="section">
        <img class="work-thumbs" src="images/works_thumbnail/placeholder.png" alt="Game profile thumbnail.">
        <h1>The Swallow's Descent</h1>
        <p>A mystery/whodunnit starring William Byske, an investigator for the Arcane Recon Corps.</p>
    </div>

</div>

<style lang="scss">
    @import "../node_modules/rfs/scss";

    h1 {
        display: block;
        margin-bottom: 0;
        @include font-size(1.8rem);
        font-family: 'Segoe UI', Helvetica, sans-serif;
        font-weight: normal;
    }

    p {
        text-align:justify;
    }

    .section {
        width: 100%;
        h1 {
            @include font-size(1.2rem);
        }
        p {
            @include font-size(0.75rem);
        }
    }

    .work-thumbs {
        float: left;
    }
</style>