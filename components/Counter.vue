<template>
  <section v-observe-visibility="onVisibilityChange" class="border-top pt-120 pb-80">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 329 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Attendees and  <br/> counting</p>
                </div><!-- single counetr -->
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 9 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Speakers</p>
                </div><!-- single counetr -->
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 12 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Countries represented</p>
                </div><!-- single counetr -->
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 1 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Epic MC</p>
                </div><!-- single counetr -->
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container -->

</section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

    export default {
      name: "Counter",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false
        }
      },
      methods: {
        onVisibilityChange (isVisible) {
          if (isVisible){
            this.startCounter = true;
          }

        },
      },
    }
</script>

<style scoped>

</style>
