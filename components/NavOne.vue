<template>
    <header class="header">
        <!-- Start Header Navbar-->
        <div :class="`main-header ${sticky ? 'sticky fadeInDown' : ''}`">
            <div class="main-menu-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-3 col-md-4 col-6">
                            <!-- Logo -->
                            <div class="logo">
                                <nuxt-link to="/">
                                    <!-- <img src="/assets/img/logo.png" alt="VimConf.Live"> -->
                                    <img src="../static/assets/img/vim-conf-banner-logo.png" alt="">
                                </nuxt-link>
                            </div>
                            <!-- End of Logo -->
                        </div>
                        <div class="col-xl-9 col-lg-7 col-md-5 col-7 menu-button">
                            <div class="menu--inner-area clearfix">
                                <div class="menu-wraper">
                                    <nav>
                                        <!-- Header-menu -->
                                        <div class="header-menu dosis">
                                            <div id="menu-button" class="">
                                                <i class="fa fa-bars"></i>
                                            </div>

                                            <ul class="main-nav">
                                                <!-- <li class="active"><nuxt-link
                                              to="/">Home</nuxt-link>-->
                                                <!-- <ul>-->
                                                <!-- <li class="active"><nuxt-link to="/">Home
                                                      1</nuxt-link></li>-->
                                                <!-- <li><nuxt-link to="/index2">Home
                                                      2</nuxt-link></li>-->
                                                <!-- </ul>-->
                                                <!-- </li>-->
                                                <li><a target="_blank" rel="noopener noreferrer" id="iconAnchor" href="https://discord.gg/Cz9J4ZD"><img style="height: 60px; width: 50 px; padding: 0px;" src="../static/assets/img/Discord-Logo-Color.png" alt=""></a></li>
                                                <li><a href="#tickets">Registration</a></li>
                                                <li><a href="#app">Speakers</a></li>
                                                <li><a href="#agenda">Agenda</a></li>
                                                <li><a href="#sponsor">Sponsors</a></li>
                                                <li><a href="#platform">Conference platform</a></li>
                                                <!-- <li>-->
                                                <!-- <a href="#">Blog</a>-->
                                                <!-- <ul>-->
                                                <!-- <li>-->
                                                <!-- <nuxt-link to="/blog"-->
                                                <!-- >Blog Posts</nuxt-link-->
                                                <!-- >-->
                                                <!-- </li>-->
                                                <!-- <li>-->
                                                <!-- <nuxt-link to="/blog-details"-->
                                                <!-- >single Post</nuxt-link-->
                                                <!-- >-->
                                                <!-- </li>-->
                                                <!-- </ul>-->
                                                <!-- </li>-->
                                            </ul>
                                        </div>
                                        <!-- End of Header-menu -->
                                    </nav>
                                </div>
                            </div>
                        </div>
                    <!--    <div class="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
                            <div class="urgent-call text-right">
                                <a href="#" class="btn">Get Tickets!</a>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Navbar-->
    </header>
</template>

<script>
export default {
    name: "NavOne",
    data() {
        return {
            sticky: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);

        this.mobileMenu();
    },

    methods: {
        handleScroll() {
            if (window.scrollY > 70) {
                this.sticky = true;
            } else if (window.scrollY < 70) {
                this.sticky = false;
            }
        },

        mobileMenu() {
            //Mobile Menu Toggle
            let mainNavToggler = document.querySelector("#menu-button");
            let mainNav = document.querySelector(".main-nav");

            mainNavToggler.addEventListener("click", function() {
                //mainNavToggler.classList.add('menu-opened');
                mainNav.style.display = mainNav.style.display != "block" ? "block" : "none";
            });
        }
    }
};
</script>

<style scoped>
#iconAnchor{

padding: 0px;
}
</style>
