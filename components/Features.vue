<template>
  <div>
  <section class="pb-110" id='features'>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                  <!-- section title -->
                  <div class="section-title text-center">
                      <h2>What to look forward to!</h2>
                      <p>Our aim is to bring you the most interesting, engaging and enlightening vim
                      content to bring new ideas to your world and always help you reach that next
                      step in your vim journey.</p>
                  </div>
                  <!-- End of section title -->
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12">
                  <div class="feature-carousel owl-carousel">

                    <swiper :options="swiperOptions">

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/project-management.svg" class="svg" alt=""></div>
                          <h5>New vim horizons<br> Unveiled</h5>
                          <p>We all want to see what the future will bring for vim, and here we aim
                          to bring the brightest minds working on the future of the vim world to
                          share their works.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/solution.svg" class="svg" alt=""></div>
                          <h5>Vim in your<br> Workflow</h5>
                          <p>Lectures on how people are using vim everday in their work and ways you
                          can implement it as well!</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/planning.svg" class="svg" alt=""></div>
                          <h5>Plugins</h5>
                          <p>The world of vim plugins are vast and enthralling. We aim to bring you
                          the cutting edge in plugin capabilities.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/goal.svg" class="svg" alt=""></div>
                          <h5>Find solutions to your vim question</h5>
                          <p>We all run into issues in vim, at the conference you'll have the chance
                          to connect with other experienced vimmers and pick their brain for
                          support.</p>
                      </div><!-- End of single feature inner -->
                      </swiper-slide>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                  </div><!--/.feature-carousel-->
              </div><!--/.col-->
          </div><!--/.row-->
      </div><!--/.container-->
  </section>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "Features",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2
            },
            320:{
                slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
