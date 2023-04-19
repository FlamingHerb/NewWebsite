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
            Hello, I am Michael Sean Brian B. Omisol. Also known as Vaccaria. I am a {year - 2001} old game/software developer and writer, who is currently a {year - 2020}rd year BS Computer Science student in the University of the Philippines — Diliman. I have past experience in making games, writing stuff about games, and working with various game devs... including leading a group in the past.
        </p>
        <p>
            If you've noticed why my site is somewhat archaic looking, that's because I made it that way. It's to honor a past that is already gone, fueled rather by whitespace-dominated websites that takes longer to load because your phone struggles to load up all the JavaScript boilerplates you need. But I digress. There's a lot more to learn, and lot to even shatter about modern designs.
        </p>
        <p>
            If you want to learn more about me, there's the About Me page above. Just click on it. <a href="/aboutme">Or right here</a>.
        </p>
    </div>
    <div class="section">
        <h1>EXPERIENCE</h1>
        <p>
            Hello, I am Michael Sean Brian B. Omisol. Also known as Vaccaria. I am a {year - 2001} old game/software developer and writer, who is currently a {year - 2020}rd year BS Computer Science student in the University of the Philippines — Diliman. I have past experience in making games, writing stuff about games, and working with various game devs... including leading a group in the past.
        </p>
        <p>
            If you've noticed why my site is somewhat archaic looking, that's because I made it that way. It's to honor a past that is already gone, fueled rather by whitespace-dominated websites that takes longer to load because your phone struggles to load up all the JavaScript boilerplates you need. But I digress. There's a lot more to learn, and lot to even shatter about modern designs.
        </p>
        <p>
            If you want to learn more about me, there's the About Me page above. Just click on it. <a href="/aboutme">Or right here</a>.
        </p>
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
        
        margin-left: 1.2em;
        margin-right: 1.2em;

        p {
            @include font-size(0.75rem);
        }
    }
</style>