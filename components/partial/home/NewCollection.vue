<template>
    <div class="bg-lighter new-collection pt-5 pb-5 mb-5">
        <div class="container">
            <div class="heading text-center mb-4">
                <h2 class="title">Recent Arrivals</h2>

                <p class="title-desc">Aliquam tincidunt mauris eurisus</p>
            </div>
            <div class="swiper-carousel carousel-with-shadow swiper-1">
                <div class="mb-0" v-swiper:swiper1="carouselSetting1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(product, index) in products" :key="index">
                            <product-twelve :product="product"></product-twelve>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav">
                    <div class="swiper-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
                <div class="swiper-dots"></div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductTwelve from '~/components/elements/products/ProductTwelve';

import { carouselSetting1 } from '~/utilities/carousel';

export default {
    components: {
        ProductTwelve
    },
    props: {
        products: Array
    },
    data: function() {
        return {
            carouselSetting1: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.new-collection .swiper-next',
                    prevEl: '.new-collection .swiper-prev'
                },
                pagination: {
                    el: '.new-collection .swiper-dots',
                    clickable: true
                }
            }
        };
    }
};
</script>
