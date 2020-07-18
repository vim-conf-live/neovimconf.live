<template>
    <section class="pt-120 pb-115 app-shot-one" id="sponsor">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-8">
                    <!-- section title -->
                    <div  class="section-title text-center">
                        <h2 >Sponsors</h2>
                        <p id="sponsorheader">
                            We're grateful to have the following sponsors supporting this event and
                            vim love globally!
                        </p>
                            <img src="/assets/img/sponsor-onivim.png" alt="" />
                    </div>
                    <!-- End of section title -->
                </div>
            </div>
            <!-- /.app-shot-one__carousel owl-theme owl-carousel -->
        </div>
        <!-- /.container-fluid -->
    </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "Screenshots",
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            showslide: true,
            swiperOptions: {
                slidesPerView: 5,
                loop: true,
                speed: 1000,
                spaceBetween: 20,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },

                // Responsive breakpoints
                breakpoints: {
                    1024: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 2
                    },
                    320: {
                        slidesPerView: 1
                    }
                }
            }
        };
    }
};
</script>

<style scoped>

#sponsorheader{
    margin-bottom:90px;
}
</style>
