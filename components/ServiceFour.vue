<template>
    <section class="pt-120 pb-115 app-shot-one" id="lectures">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-8">
                    <!-- section title -->
                    <div class="section-title text-center">
                        <h2>Watch all the lectures on <span style="color:red;">YouTube</span></h2>
                        <p>
                            You can find all the lectures from the event on our YouTube channel
                        </p>
                        <a
                            href="https://www.youtube.com/channel/UCPK_UHtbfcWABCi0F0GPG6w"
                            rel="noopener noreferrer"
                            target="_blank"
                            ><button  class="btn">Watch Now!</button></a
                        >
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
    },
    mounted() {
        var exampleCallback = function() {
            console.log("Order complete!");
        };

        window.EBWidgets.createWidget({
            // Required
            widgetType: "checkout",
            eventId: "114007880640",
            iframeContainerId: "eventbrite-widget-container-114007880640",

            // Optional
            iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
            onOrderComplete: exampleCallback // Method called when an order has successfully completed
        });
    }
};
</script>

<style scoped>
#sponsorheader {
    margin-bottom: 90px;
}
</style>
