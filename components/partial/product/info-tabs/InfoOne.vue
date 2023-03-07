<template>
    <div class="product-details-tab">
        <tabs class="nav-pills justify-content-center" :data="tabsData"></tabs>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="tab1">
                <div class="product-desc-content" v-html="product.description">
                   
                    <!-- <h3>Product Information</h3>
                    <p
                        class="mb-1"
                    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                    <ul>
                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p> -->
                </div>
            </div>

            <div class="tab-pane fade" id="tab2">
                <div class="product-desc-content">
                    <h3>Information</h3>
                    <p
                        class="mb-2"
                    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>

                    <h3>Fabric & care</h3>
                    <ul>
                        <li>Faux suede fabric</li>
                        <li>Gold tone metal hoop handles.</li>
                        <li>RI branding</li>
                        <li>Snake print trim interior</li>
                        <li>Adjustable cross body strap</li>
                        <li>Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                    </ul>

                    <h3>Size</h3>
                    <p>one size</p>
                </div>
            </div>

            <div class="tab-pane fade" id="tab3">
                <div class="product-desc-content">
                    <h3>Delivery & returns</h3>
                    <p>
                        We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our
                        <a
                            href="#"
                        >Delivery information</a>
                        <br />We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our
                        <a
                            href="#"
                        >Returns information</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tabs from '~/components/elements/Tabs';
export default {
    props:{
        product:{
            required:true
        }
    },
    components: {
        Tabs
    },
    data: function() {
        return {
            tabsData: [
                {
                    id: 'tab1',
                    title: 'Description',
                    active: true
                },
                {
                    id: 'tab2',
                    title: 'Additional Information'
                },
                {
                    id: 'tab3',
                    title: 'Shipping'
                },
            ]
        };
    }
};
</script>