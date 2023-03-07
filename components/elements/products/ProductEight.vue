<template>
    <div class="product product-list">
        <div class="row pr-2">

            <div class="col-lg-3 col-md-3 col-6">
                <figure class="product-media">
                    <!-- <span class="product-label label-new" v-if="product.new">New</span>
                    <span class="product-label label-sale" v-if="product.sale_price">Sale</span>
                    <span class="product-label label-top" v-if="product.top">Top</span>
                    <span class="product-label label-out" v-if="product.stock === 0">Out Of Stock</span> -->

                    <nuxt-link :to="'/product/centered/'+ product.id">
                        <img
                            v-lazy="`${product.product_image[0].image_url}`"
                            alt="Product"
                        
                            class="product-image"
                        />
                        <img
                            v-lazy="`${product.product_image[1].url}`"
                            alt="Product"
                        
                            class="product-image-hover"
                            v-if="product.product_image[1]"
                        />
                    </nuxt-link>
                </figure>
            </div>

            <div class="col-lg-6 col-md-6 order-last">
                <div class="product-body product-action-inner">
                    <div class="product-cat">
                        <span>
                            <nuxt-link
                                :to="{path: '/shop/sidebar/list', query: {category: product.category.slug}}"
                            >{{ product.category.name }}</nuxt-link>
                            <!-- {{ index < product.category.length - 1 ? ',' : '' }} -->
                        </span>
                    </div>
                    <h3 class="product-title">
                        <nuxt-link :to="'/product/centered/'+ product.id">{{ product.name }}</nuxt-link>
                    </h3>

                    <div class="product-content">
                        <p>{{ product.description }}</p>
                    </div>

                    <!-- <div class="product-nav product-nav-dots" v-if="product.variants.length > 0">
                        <div class="row no-gutters">
                            <a
                                href="javascript:;"
                                :style="{'background-color': item.color}"
                                v-for="(item, index) in product.variants"
                                :key="index"
                            >
                                <span class="sr-only">Color name</span>
                            </a>
                        </div>
                    </div> -->
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-6 order-md-last order-lg-last">
                <div class="product-list-action">
                    <div class="product-price" v-if="product.details.opening_stock==0" key="outPrice">
                        <span class="out-price">${{ parseFloat(product.details.sales_price).toFixed(2) }}</span>
                    </div>

                    <template v-else>
                        <div
                            class="product-price"
                            v-if="minPrice == maxPrice"
                        >${{ minPrice.toFixed(2) }}</div>
                        <template v-else>
                            <div class="product-price" >
                                <span class="new-price">${{ minPrice.toFixed(2) }}</span>
                                <span class="old-price">${{ maxPrice.toFixed(2) }}</span>
                            </div>

                            <!-- <div
                                class="product-price"
                                v-else
                            >${{minPrice.toFixed(2)}}&ndash;${{maxPrice.toFixed(2)}}</div> -->
                        </template>
                    </template>

                    <!-- <div class="ratings-container">
                        <div class="ratings">
                            <div class="ratings-val" :style="{width: product.ratings * 20 + '%'}"></div>
                            <span class="tooltip-text">{{ product.ratings.toFixed(2) }}</span>
                        </div>
                        <span class="ratings-text">( {{ product.review }} Reviews )</span>
                    </div> -->

                    <div class="product-action">
                        <button
                            class="btn-product btn-quickview"
                            title="Quick view"
                            @click.prevent="quickView({product: product})"
                        >
                            <span>quick view</span>
                        </button>
                        <nuxt-link
                            to="/shop/wishlist"
                            class="btn-product btn-wishlist added-to-wishlist"
                            v-if="isInWishlist(product)"
                            key="inWishlist"
                        >
                            <span>wishlist</span>
                        </nuxt-link>
                        <a
                            href="javascript:;"
                            class="btn-product btn-wishlist"
                            @click.prevent="addToWishlist({product: product})"
                            v-else
                            key="notInWishlist"
                        >
                            <span>wishlist</span>
                        </a>
                    </div>

                    <!-- <nuxt-link
                        :to="'/product/default/' + product.slug"
                        class="btn-product btn-cart btn-select"
                        v-if="product.variants.length > 0"
                    >
                        <span>select options</span>
                    </nuxt-link> -->

                    <button
                        class="btn-product btn-cart"
                        :class="{'btn-disabled': !canAddToCart(product, 1)}"
                        @click.prevent="addToCart( {product: product} )"
                    >
                        <span>add to cart</span>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/repositories/repository';
export default {
    props: {
        product: Object
    },
    data: function() {
        return {
            baseUrl: baseUrl,
            maxPrice: 0,
            minPrice: 99999
        };
    },
    computed: {
        ...mapGetters('cart', ['canAddToCart']),
        ...mapGetters('wishlist', ['isInWishlist']),
        ...mapGetters('compare', ['isInCompare'])
    },

    created: function() {
        let min = this.minPrice;
        let max = this.maxPrice;
        // this.product.variants.map(item => {
        //     if (min > item.price) min = item.price;
        //     if (max < item.price) max = item.price;
        // }, []);

        // if (this.product.variants.length == 0) {
            min = this.product.details.sales_price
            max = this.product.details.sales_price
        // }

        this.minPrice = parseFloat(min);
        this.maxPrice = parseFloat(max);
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        ...mapActions('wishlist', ['addToWishlist']),
        ...mapActions('compare', ['addToCompare']),
        quickView: function() {
            this.$modal.show(
                () => import('~/components/elements/modals/QuickViewModal'),
                {
                    product: this.product
                },
                { width: '1030', height: 'auto', adaptive: true }
            );
        }
    }
};
</script>