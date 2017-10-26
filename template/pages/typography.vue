<template>
    <section class="container-fluid">
        <h1>Basic typography</h1>

        <h3>Alerts</h3>
        <p>
            <b-alert show dismissible>
                Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
        </p>
        <h3>Buttons</h3>
        <p>
            <template v-for="variant in ['primary','secondary','success','warning','danger','link']">
                <b-button :variant="variant" href="#">
                    {{variant}}
                </b-button>
            </template>
        </p>
        <p>
            <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-warning','outline-danger','outline-link']">
                <b-button :variant="variant" href="#">
                    {{variant}}
                </b-button>
            </template>
        </p>
        <h3>Jumbotron</h3>
        <b-jumbotron header="Fluent bootstrap" lead="Bootstrap 4 Components for Vue.js 2" class="bg-dark">
            <p>For more information visit website</p>
            <b-btn variant="primary" href="#">More Info</b-btn>
        </b-jumbotron>
        <h3>Headers</h3>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
        <p>Paragraph</p>
        <p class="lead">Lead paragraph</p>
        <ul>
            <li>List</li>
            <li>Item</li>
        </ul>
        <ol>
            <li>List</li>
            <li>Item</li>
        </ol>
    </section>
</template>

<script>
  export default {};
</script>
