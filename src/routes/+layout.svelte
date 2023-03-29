<div id="header">
    <h1>Vaccaria</h1>
    <p>Random tagline that will be randomized.</p>
    <ul>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>E-Mail</li>
    </ul>
    <br>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/settings">Settings</a>
    </nav>
</div>

<slot></slot>

<style lang="scss">

    /* Global Styles */
    :global(p) {
        font-size: 0.77em;
    }

    li {
        list-style-type: none;
        float: left;
    }

    /* Local Styles */
    #header {
        background-color: #FFFFFF;
        width: 976px;
        padding-top: 32px;
        margin: auto;
        
        border: 2px solid #303030;
        border-top: 0;
        border-bottom: 0;
    }
</style>