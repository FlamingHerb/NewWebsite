
<head>
    <title>Works | Vaccaria's Website</title>
</head>

<div class="container column-direction" style="margin-bottom: 4rem;">
    <h1>GAMES</h1>
    <div class="mini-container row-direction">
        <figure>
            <img class="poster" src="images/works_poster/pu.png" alt="Project Unity Poster">
            <figcaption><strong>Project Unity</strong> (TBD)</figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/uaoatw.png" alt="Useless Apologies of a Troublesome Witch Poster">
            <figcaption><strong>-repent loci- Useless Apologies of a Troublesome Witch</strong> (2020)</figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/sing.png" alt="Sa Ilalim ng Gabi Poster">
            <figcaption><strong>Sa Ilalim ng Gabi</strong> (2020)</figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/tsw.png" alt="The Swallow's Descent Poster">
            <figcaption><strong>The Swallow's Descent</strong> (2016)</figcaption>
        </figure>
    </div>
    <h1>WORKS</h1>
    <div class="mini-container row-direction">
        <figure>
            <img class="poster" src="images/works_poster/mtgr.png" alt="Project Unity Poster">
            <figcaption><strong>Multithreaded GREP Runner</strong> (2023)</figcaption>
        </figure>
    </div>
</div>

<style lang="scss">
    @import "../node_modules/rfs/scss";

    figure {
        margin: 0;
        max-width: 223.2px;
    }

    figcaption {
        text-align: center;
        max-width: 195.2px;
        padding: 0px 14px;
    }

    .poster {
        width: 195.2px;
        padding: 14px;
    }

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

    table {
        border-collapse: collapse;
        max-width: 80%;
        
        tr:nth-child(even) {background-color: #f2f2f2;}

        h1 {
            margin-top: 0.25em;
            @include font-size(1.2rem);

            a {
                text-decoration: none;
            }
        }
        p {
            @include font-size(0.75rem);
        }

        .description{
            vertical-align: top;
            padding-left: 0.5em;
            padding-right: 0.5em;
        }
    }

</style>