<template>
    <form @submit.prevent="$router.push('/search/'+searchString)" class="header__search">
        <input
        class="header__search-input"
        type="search"
        placeholder="Например, кожаный бомбер"
        v-model="searchString" ref="searchStringInput"
        @focus="focusIt"
        @keydown="keydown"
        />
        <button @click="$router.push('/search/'+searchString)">
            <img src="@/assets/images/search.svg" alt="" />
        </button>
        <!-- Результат поиска(скрыт) -->
        <div class="search-results" v-if="variants && variants.length>0" v-click-outside="blurIt" ref="searchResultsScroller">
            <router-link v-for="product of variants"
            :key="product.id"
            @click="variants=[]"
            :to="'/product/'+product.id" class="search-result">
            <div class="search-result__top">
                <img
                src="@/assets/images/category-sm.svg"
                alt=""
                class="header-result__icon"
                />
                <p class="search-result__category">{{ product.category }}</p>
            </div>
            <div class="search-result__bottom">
                <p class="search-result__name">{{ product.product }}</p>
                <img
                src="@/assets/images/Arrow-left.svg"
                alt=""
                class="search-result__arrow"
                />
                <p class="search-result__category--sm"> {{ product.category }}</p>
            </div>
        </router-link>
    </div>
</form>

</template>

<script>
import API from '../../api'

export default {
    name: 'SearchBar',
    data() {
        return {
            searchString: '',
            variants:[],
            activeSearchVariantIdx:null,
            keyPressedTime:null,
            searchResultsVisible:false,
            a:false,
        }
    },
    methods: {
        
        focusIt(){
            if (this.searchString && this.searchString.length) {
                this.keydown();
                this.$refs.searchStringInput.select();
                setTimeout(() => this.$refs.searchStringInput.setSelectionRange(0, 9999), 300);
            }
        },
        keydown(e){
            let t = (new Date()).getTime();
            switch (true) {
                case e && e.keyCode === 38: // up
                if (this.activeSearchVariantIdx === null) {
                    this.activeSearchVariantIdx = this.variants.length - 1;
                    this.scrollToVariant();
                }
                else {
                    if (this.activeSearchVariantIdx > 0) {
                        --this.activeSearchVariantIdx;
                        this.scrollToVariant();
                    }
                }
                break;
                case e && e.keyCode === 40: // down
                if (this.activeSearchVariantIdx === null) {
                    this.activeSearchVariantIdx = 0;
                    this.scrollToVariant();
                }
                else {
                    if (this.activeSearchVariantIdx < this.variants.length - 1) {
                        ++this.activeSearchVariantIdx
                        this.scrollToVariant();
                    }
                }
                break;
                case e && e.keyCode === 13: // Enter
                if (this.activeSearchVariantIdx !== null) {
                    this.searchString = this.variants[this.activeSearchVariantIdx].product;
                }
                this.variants=[]
                break;
                case e && e.keyCode === 27: // Esc
                this.variants=[]
                break;
                default:
                this.keyPressedTime = t;
                setTimeout(() => this.getVariants(t), 300);
            }
        },
        blurIt(){
            this.keyPressedTime = (new Date()).getTime();
            this.searchResultsVisible = false;
            this.activeSearchVariantIdx = null;
            this.variants = [];
        },
        scrollToVariant(){
            try {
                this.$refs.searchResultsScroller.children[this.activeSearchVariantIdx].scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });
            } catch (e) {console.log(e)}
        },
        getVariants(callTime) {
            if (this.keyPressedTime<= callTime) {
                if (this.searchString.length>3) {
                    this.activeSearchVariantIdx = null;
                    API.searchProductsVariants(this.searchString).then(response => {
                        if (this.keyPressedTime <= callTime) {
                            if (response.data.success) {
                                if (response.data.products && response.data.products.length) {
                                    this.variants = response.data.products;
                                    this.searchResultsVisible = true;
                                } else {this.variants = [];}
                            }
                        }
                    }).catch(error => {console.log(error);})
                }
                else {
                    this.variants = [];
                    this.searchResultsVisible = false;
                }
            }
        },
        
        closeIt() {
            if (!this.a) this.a = this.showCatalog
            else {
                this.a = false
                this.showCatalog = false
            }
        }
    },
    
}
</script>

<style>

</style>