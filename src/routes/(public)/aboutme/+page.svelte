<script>

    const d = new Date();
    let year = d.getFullYear();
    
    let authorimg = "/images/witch.png";
    let caption = "If you're wondering, that ain't me.";

    function handleMouseOver() {
		authorimg = '/images/pranked.png';
        caption = "You like kissing boys, don't you?";
	}
	function handleMouseOut() {
		authorimg = '/images/witch.png';
        caption = "If you're wondering, that ain't me.";
	}

</script>

<head>
    <title>About Me | Vaccaria's Website</title>
</head>

<div class="container wrapper column-direction">
    <div class="section">
        <h1>INTRODUCTION</h1>
        <figure id="authorimg">
            <img src="{authorimg}" alt="A witch profile." on:mouseover={handleMouseOver} on:focus={handleMouseOver} on:blur={handleMouseOut} on:mouseout={handleMouseOut}>
            <figcaption>{caption}</figcaption>
        </figure>
        <p>
            I am Michael Sean Brian B. Omisol. Also known as Vaccaria. I am a {year - 2001} old game/software developer and writer, currently a {year - 2020}rd year BS Computer Science student in the University of the Philippines — Diliman. I have past experience in making games, writing stuff about games, and working with various game devs, including leading a group in the past.
        </p>
    </div>
    <div class="section">
        <h1>EXPERIENCE</h1>
        <p>a</p>
    </div>
</div>

<style lang="scss">
    @import "../node_modules/rfs/scss";

    h1 {
        display: block;
        margin-bottom: 0;
    }

    p {
        text-align:justify;
    }

    #authorimg {
        float: right;
        margin: 0 0 1.2em 2.4em;

        figcaption {
            margin:auto;
            text-align: center;
            @include font-size(0.6rem);
        }
    }

    h1 {
        @include font-size(1.8rem);
        font-family: 'Segoe UI', Helvetica, sans-serif;
        font-weight: normal;
    }


    .section {
        
        min-width: 85%;
        max-width: 85%;
        margin-left: 1.2em;
        margin-right: 1.2em;

        p {
            @include font-size(1rem);
        }
    }
</style>