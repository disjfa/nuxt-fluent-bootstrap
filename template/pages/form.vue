<template>
  <section class="container-fluid">
    <h1>Forms</h1>
    <p class="lead">For forms we use vue-bootstrap</p>
    <div class="row">
      <div class="col-lg-4">
        <h3>Your information</h3>
        <div>
          \{{ firstname }} \{{ lastname }}
        </div>
        <div>
          \{{ phonenumber }}
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-sm-4">
            <b-form-group 
              description="Let us know your firstname." 
              label="Enter your firstname">
              <b-form-input 
                id="firstname" 
                v-model="firstname"/>
            </b-form-group>
          </div>
          <div class="col-sm-8">
            <b-form-group 
              description="Let us know your lastname." 
              label="Enter your lastname">
              <b-form-input 
                id="lastname" 
                v-model="lastname"/>
            </b-form-group>
          </div>
        </div>
        <b-form-group 
          description="Let us know your phonenumber." 
          label="Enter your phonenumber">
          <b-form-input 
            id="phonenumber" 
            v-model="phonenumber"/>
        </b-form-group>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      phonenumber: ""
    }
  },
  mounted() {
    //      console.log(this.$router);
  }
}
</script>
