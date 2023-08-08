<script>
  // import { PUBLIC_CURRENT_MODE } from '$env/static/public';
  // import { redirect } from '@sveltejs/kit';
  import { page } from '$app/stores';

  // if (PUBLIC_CURRENT_MODE == "development" && $page.url.pathname != "/notallowed") {
  //   throw redirect(307, '/notallowed');
  // }

  import taglineDatabase from '$lib/taglines.json';
  import { navigating } from '$app/stores';

  let innerWidth = 0;

  let tagline = "If you see this message, then that means you haven't loaded everything properly.";
  function taglineGenerator(){
    const num = Math.floor(Math.random() * (taglineDatabase.length))
    tagline = taglineDatabase[num];
  }
  
  taglineGenerator();
  $: if($navigating) taglineGenerator();
</script>

<svelte:window bind:innerWidth />
<div class="local-header">
  
  <div class="header">
    <div id="tophead">
      <div id="leftside">
        <span id="placeholder">
          vaccaria
        </span>
        <div id="medialinks">
          <a href="https://github.com/FlamingHerb">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.linkedin.com/in/msbbomisol/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          <a href="https://www.facebook.com/OmiLomidotexe/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a>
          <a href="https://twitter.com/Vacc_aria">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg></a>
          <a href="mailto:michaelomisol@protonmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg></a>
        </div>
        <p id="tagline">{tagline}</p>
      </div>
    </div>
    <!-- <img id="logo" src="/images/fa.webp" alt="segs"> -->
  </div>
  <div class="nav">
    <a class="{$page.route.id === '/' ? 'current' : ''}" href="/">HOME</a>
    <a class="{$page.route.id === '/works' ? 'current' : ''}" href="/works">WORKS</a>
    <!-- <a class="{$page.route.id === '/blog' ? 'current' : ''}" href="/blog">BLOG</a> -->
    <a class="{$page.route.id === '/aboutme' ? 'current' : ''}" href="/aboutme">ABOUT ME</a>
    <a class="{$page.route.id === '/contact' ? 'current' : ''}" href="/contact">CONTACT ME</a>
  </div>

</div>

<slot />


<style lang="scss">
  @import "../node_modules/rfs/scss";
  

  /* Local Styles */

  .local-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ffffff;
    margin: auto;
    justify-content: space-between;
    

    //border: 2px solid #303030;
    //border-top: 0;

    //padding-bottom: 2em;
  }

  .header {
    display: flex;
    align-items: center;
    //background-color: #ffffff;
    //margin: auto;

    //border: 2px solid #303030;
    //border-top: 0;
    padding-bottom: 0;
  }

  .nav {
    display: flex;
    align-items: center;
    //background-color: #2f2f2f;
    //max-width: 976px;
    padding: 8px 0;
    //margin: auto;

    border-top: 0;
    border-bottom: 0;

    a {
      text-align: center;
      @include font-size(1.25rem);
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      text-decoration: none;
      color: #000000;
      padding: 0 0.6em;

      &:hover{
        color: #ff9600;
      }

    }
  }


  #logo {
    margin-left: 1em;
    margin-right: 0.5em;
    height: 102px;
  }

  #leftside {
    margin-left: 1em;
  }

  #medialinks {
    display: inline-flex;
    gap: 5px;
  }



  /*
  @media only screen and (max-width: 520px) {
    #logo {
        display: none;
    }
  }
  */

  #placeholder {
    font-family: 'Eastman Alternate Trial Medium', sans-serif;
    letter-spacing: 0.05em;
    display: inline-flex;
    margin-block-start: 0.4em;
    //margin-left: 0.4em;
    margin-right: 0.2em;

    font-weight: bold;

    @include font-size(3.5rem);
  }

  #tagline {
    
    margin-block-start: 0px;
    margin-block-end: 1.2em;
    //margin-left: 1.6em;
    font-style: italic;

    @include font-size(0.8rem);
  }

  

  .current{
    text-decoration: underline;
    color: #ff9600;
  }

  
</style>
