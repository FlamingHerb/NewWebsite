
<head>
    <title>About Me | Vaccaria's Website</title>
</head>

<div class="container wrapper column-direction">
    <h1>Games</h1>
    <table>
        <tr>
            <td>
                <a href="/"><img src="images/works_thumbnail/project_unity.png" alt="Game profile thumbnail."></a>
            </td>
            <td class="description">
                <h1><a href="/">Project Unity</a></h1>
                <p>A murder-mystery VN-like game where a detective is invited to a doomed party in an isolated mansion. This game is made for the partial fulfillment of the CS 192 class.</p>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/"><img src="images/works_thumbnail/repent_loci_valentines.jpg" alt="Game profile thumbnail."></a>
            </td>
            <td class="description">
                <h1><a href="/">-repent loci- useless apologies of a troublesome witch</a></h1>
                <p>She keeps doing weird things, they all claim she's a witch. Why does she keep it up, while apologizing?</p>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/"><img src="images/works_thumbnail/sing.png" alt="Game profile thumbnail."></a>
            </td>
            <td class="description">
                <h1><a href="/">Sa Ilalim ng Gabi</a></h1>
                <p>A horror game taking the role of a priestess doing her best to avoid the chaos. This game is made for the partial fulfillment of the SCALE Program 2018-2020 and for the Theme Roulette 2 event.</p>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/"><img src="images/works_thumbnail/swallows_descent.png" alt="Game profile thumbnail."></a>
            </td>
            <td class="description">
                <h1><a href="/">The Swallow's Descent</a></h1>
                <p>A mystery/whodunnit starring William Byske, an investigator for the Arcane Recon Corps.</p>
            </td>
        </tr>
    </table>


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



    table {
        border-collapse: collapse;
        max-width: 97.5%;
        
        tr:nth-child(even) {background-color: #f2f2f2;}

        h1 {
            margin-top: 0;
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
        }
    }

</style>