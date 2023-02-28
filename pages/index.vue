<template>
    <div class="main home-page">
        <div class="intro-slider-container mb-3 mb-lg-5">
            <div class="intro-slider swiper-carousel swiper-1">
                <div v-swiper:swiper1="carouselSetting1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div
                                class="intro-slide"
                                v-lazy:background-image="'./images/home/sliders/slide-1.jpg'"
                            >
                                <div class="container intro-content text-center">
                                    <h3 class="intro-subtitle text-white">SEASONAL PICKS</h3>

                                    <h1 class="intro-title text-white">Get All The Good Stuff</h1>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white"
                                    >
                                        <span>DISCOVER MORE</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="banner banner-display banner-link-anim banner-title-hidden">
                        <nuxt-link to="/shop/sidebar/3cols">
                            <img
                                v-lazy="'./images/home/banners/banner-1.jpg'"
                                width="574"
                                height="500"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content banner-content-center">
                            <h3 class="banner-title text-white">
                                <nuxt-link to="/shop/sidebar/3cols">This Week's Most Wanted</nuxt-link>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols"
                                class="btn btn-outline-white banner-link"
                            >Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="banner banner-display banner-link-anim banner-title-hidden">
                        <nuxt-link to="/shop/sidebar/3cols">
                            <img
                                v-lazy="'./images/home/banners/banner-2.jpg'"
                                width="574"
                                height="240"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content banner-content-center">
                            <h3 class="banner-title text-white">
                                <nuxt-link to="/shop/sidebar/3cols">Bags by Mood</nuxt-link>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols"
                                class="btn btn-outline-white banner-link"
                            >Discover Now</nuxt-link>
                        </div>
                    </div>

                    <div class="banner banner-display banner-link-anim banner-title-hidden">
                        <nuxt-link to="/shop/sidebar/3cols">
                            <img
                                v-lazy="'./images/home/banners/banner-3.jpg'"
                                width="574"
                                height="240"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content banner-content-center">
                            <h3 class="banner-title text-white">
                                <nuxt-link to="/shop/sidebar/3cols">The Trend Story</nuxt-link>
                            </h3>

                            <nuxt-link
                                to="/shop/sidebar/3cols"
                                class="btn btn-outline-white banner-link"
                            >Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-3"></div>
        </div>

        <new-collection :products="newProducts" v-if="loaded"></new-collection>

        <div class="container">
            <div class="heading text-center mb-4">
                <h2 class="title">Popular Categories</h2>

                <p class="title-desc">Vestibulum auctor dapibus neque</p>
            </div>

            <div class="row">
                <div class="col-sm-6 col-lg-4">
                    <div class="banner banner-display banner-link-anim">
                        <nuxt-link to="/shop/sidebar/list">
                            <img
                                v-lazy="'./images/home/banners/banner-4.jpg'"
                                width="376"
                                height="500"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content banner-content-center">
                            <h3 class="banner-title text-white">
                                <a href="#">Accessories</a>
                            </h3>

                            <h4 class="banner-subtitle text-white">
                                <a href="#">16 Items</a>
                            </h4>

                            <nuxt-link
                                to="/shop/sidebar/3cols"
                                class="btn btn-outline-white banner-link"
                            >Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-4 order-lg-last">
                    <div class="banner banner-display banner-link-anim">
                        <nuxt-link to="/shop/sidebar/list">
                            <img
                                v-lazy="'./images/home/banners/banner-5.jpg'"
                                width="376"
                                height="500"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content banner-content-center">
                            <h3 class="banner-title text-white">
                                <a href="javascript:;">Jewellery</a>
                            </h3>

                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;">8 Items</a>
                            </h4>

                            <nuxt-link
                                to="/shop/sidebar/3cols"
                                class="btn btn-outline-white banner-link"
                            >Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-sm-6 col-lg-12">
                            <div class="banner banner-display banner-link-anim">
                                <nuxt-link to="/shop/sidebar/list">
                                    <img
                                        v-lazy="'./images/home/banners/banner-6.jpg'"
                                        width="376"
                                        height="240"
                                        alt="Banner"
                                    />
                                </nuxt-link>

                                <div class="banner-content banner-content-center">
                                    <h3 class="banner-title text-white">
                                        <a href="javascript:;">Clothing</a>
                                    </h3>

                                    <h4 class="banner-subtitle text-white">
                                        <a href="javascript:;">24 Items</a>
                                    </h4>

                                    <nuxt-link
                                        to="/shop/sidebar/list"
                                        class="btn btn-outline-white banner-link"
                                    >Discover Now</nuxt-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-12">
                            <div class="banner banner-display banner-link-anim">
                                <nuxt-link to="/shop/sidebar/list">
                                    <img
                                        v-lazy="'./images/home/banners/banner-7.jpg'"
                                        width="376"
                                        height="240"
                                        alt="Banner"
                                    />
                                </nuxt-link>

                                <div class="banner-content banner-content-center">
                                    <h3 class="banner-title text-white">
                                        <a href="javascript:;">Shoes</a>
                                    </h3>

                                    <h4 class="banner-subtitle text-white">
                                        <a href="javascript:;">6 Items</a>
                                    </h4>

                                    <nuxt-link
                                        to="/shop/sidebar/3cols"
                                        class="btn btn-outline-white banner-link"
                                    >Shop Now</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="icon-boxes-container bg-transparent">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-rocket"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Free Shipping</h3>

                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-rotate-left"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Free Returns</h3>

                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-info-circle"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Get 20% Off 1 Item</h3>

                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-life-ring"></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">We Support</h3>

                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import NewCollection from '~/components/partial/home/NewCollection';
import NewsletterModal from '~/components/elements/modals/NewsletterModal';

import Repository, { baseUrl } from '~/repositories/repository.js';
import { attrFilter } from '~/utilities/common';
import { carouselSettingSingle } from '~/utilities/carousel';

export default {
    components: {
        NewCollection
    },
    data: function() {
        return {
            loaded: false,
            products: [],
            newProducts: [],
            carouselSetting1: {
                ...carouselSettingSingle,
                pagination: {
                    el: '.swiper-1 .swiper-dots',
                    clickable: true
                }
            }
        };
    },
    computed: {
        ...mapGetters('demo', ['newsletterShow'])
    },
    created: function() {
        this.getProducts();
    },
    mounted: function() {
        document.querySelector('header').classList.remove('position-relative');
        if (this.newsletterShow) {
            setTimeout(() => {
                if (this.$route.path == '/' && this.newsletterShow) {
                    this.$modal.show(
                        NewsletterModal,
                        {},
                        { width: '970', height: 'auto', adaptive: true }
                    );
                }
            }, 8000);
        }
    },
    destroyed: function() {
        document.querySelector('header').classList.add('position-relative');
    },
    methods: {
        getProducts: async function() {
            this.loaded = false;
            await Repository.get(`${baseUrl}/demo12`)
                .then(response => {
                    this.products = response.data.products;
                    this.newProducts = attrFilter(this.products, 'new');
                    this.loaded = true;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        }
    }
};
</script>