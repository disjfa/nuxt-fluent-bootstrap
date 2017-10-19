<template>
    <section class="container-fluid">
        <h1>Forms</h1>
        <p class="lead">For forms we use vue-bootstrap</p>
        <div>
            <b-form-group id="fieldset1" description="Let us know your name." label="Enter your name">
                <b-form-input id="input1" v-model="name"></b-form-input>
            </b-form-group>
        </div>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
      };
    },
    mounted() {
//      console.log(this.$router);
    },
  };
</script>
