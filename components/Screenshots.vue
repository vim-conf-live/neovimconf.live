<template>
    <section class="pt-120 pb-115 app-shot-one" id="app">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-8">
                    <!-- section title -->
                    <div class="section-title text-center">
                        <h2>Our Speakers</h2>
                        <p>
                            From across the globe, some of the best and brightest minds in the
                            <br />
                            vim community are coming to share their experience and expertise with
                            the community.
                        </p>
                    </div>
                    <!-- End of section title -->
                </div>
            </div>
            <div v-if="showslide" class="app-shot-one__carousel thm__owl-carousel">
                <swiper :options="swiperOptions">
                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-bryan.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>

                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-tj.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>

                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-primeagen.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>

                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-thomas.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>

                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-teaser.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>

                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-shreyansh.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>
                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-jeremy.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>
                    <swiper-slide>
                        <!-- slingle app image -->
                        <div class="item">
                            <img src="/assets/img/speaker-oliver.png" alt="" />
                        </div>
                        <!-- slingle app image -->
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination owl-dots" slot="pagination"></div>
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

<style scoped></style>
