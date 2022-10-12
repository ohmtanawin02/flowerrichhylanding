<template>
    <div class="w-full h-screen bg-center bg-cover bg-product scroll-smooth">
        <ProductHead/>
        <ProductContent/>
        <ProductFooter/>
    </div>
</template>

<script>
import ProductContent from './ProductContent.vue';
import ProductFooter from './ProductFooter.vue';
import ProductHead from './ProductHead.vue';

    
export default {
    components:[ProductHead,ProductContent,ProductFooter]
}
</script>