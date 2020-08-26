<template>
    <div class="banner-area-inner">
        <div class="banner-inner-area banner-area1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <!-- banner text -->
                        <div class="banner-text-inner">
                            <div class="banner-shape-wrap">
                                <div class="banner-shape-inner">
                                    <img
                                        src="/assets/img/banner/shaps1.png"
                                        alt=""
                                        class="shape shape1 rotate3d"
                                    />
                                    <img
                                        src="/assets/img/banner/shaps2.png"
                                        alt=""
                                        class="shape shape2 rotate2d"
                                    />
                                    <img
                                        src="/assets/img/banner/shaps3.png"
                                        alt=""
                                        class="shape shape3 rotate-2d"
                                    />
                                    <img
                                        src="/assets/img/banner/shaps4.png"
                                        alt=""
                                        class="shape shape4 rotate3d"
                                    />
                                    <img
                                        src="/assets/img/banner/shaps5.png"
                                        alt=""
                                        class="shape shape5 rotate2d"
                                    />
                                    <img
                                        src="/assets/img/banner/shaps6.png"
                                        alt=""
                                        class="shape shape6 rotate-2d"
                                    />
                                    <img
                                        src="/assets/img/banner/shaps7.png"
                                        alt=""
                                        class="shape shape7 rotate3d"
                                    />
                                </div>
                            </div>

                            <h1>Come join the world's first virtual vim conf</h1>
                            <p>
                                We're bringing together Vimmers from all around the world to connect
                                and share their love and passion for all things vim!
                            </p>
                            <!-- <a href="#" class="btn">Get tickets!</a>-->
                            <!-- <input id="email" v-model="email" placeholder="Enter email..." />
                            -->
                            <!--
                            <button id="signUpBtn" class="btn" v-on:click="signUp()">
                                Register me!
                            </button>
-->
                            <a href="#tickets"><button class="btn">Register Me!</button></a>

                            <!-- <a href="#" class="btn">See spea</a>-->
                        </div>
                        <!-- banner text -->
                    </div>
                    <div class="col-lg-5 offset-lg-1 col-md-4 offse-xl-2">
                        <!-- banner image-->
                        <div class="banner-image">
                            <img src="/assets/img/vim-conf-logo.png" alt="" />
                        </div>
                        <!--End of banner image-->
                    </div>
                </div>

                <p id="successMessage" v-if="signUpApproved">You're going!</p>
                <p id="errorMessage" v-if="errorMessage">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
//import userbase from "userbase-js";
//userbase.init({ appId: "2b809cf0-62cd-440b-ae01-d220c76c0592" });

export default {
    data() {
        return {
            name: "BannerOne",
            email: undefined,
            signUpApproved: false,
            errorMessage: undefined,
            errorMessages: {
                EmailNotValid: "Please enter a valid email.",
                UsernameAlreadyExists: "This email already, signed up!"
            }
        };
    },
    methods: {
        signUp() {
            this.signUpApproved = false;
            this.errorMessage = undefined;
            if (this.email) {
                this.$userbase
                    .signUp({
                        username: this.email,
                        email: this.email,
                        password: "vimconf",
                        rememberMe: "none"
                    })
                    .then(user => {
                        this.signUpApproved = true;
                        this.email = undefined;
                    })
                    .catch(e => {
                        console.log("Erorr here" + e);
                        this.errorMessage = this.errorMessages[e.toString().split(":")[0]];
                    });
            } else {
                this.errorMessage = "Please enter an email address!";
            }
        }
    }
};
</script>

<style scoped>
#email {
    padding-left: 5px;
    width: 250px;
}
#successMessage {
    margin-bottom: 0px;
    position: relative;
    color: green;
    bottom: 120px;
}
#errorMessage {
    margin-bottom: 0px;
    position: relative;
    color: red;
    bottom: 120px;
}
#signUpBtn {
    margin-left: 20px;
}
</style>
