<template>
    <div class="w-full h-screen bg-center bg-cover bg-background">
        <Navbar/>
        <ContentOne/>
        <AboutMain/>
        <ProductMain/>
        <PerMain/>
        <BlogMain/>
        <ReviewMain/>
        <ContactContentMain/>
    </div>
        
    
</template>


<script>
    
import ContentOne from '~~/components/ContentOne.vue';
import Navbar from '~~/components/Navbar.vue';
import ReviewMain from '~~/components/ReviewMain.vue';
import AboutMain from '../components/AboutMain.vue';
import BlogMain from '../components/BlogMain.vue';
import ContactContentMain from '../components/ContactContentMain.vue';
import PerMain from '../components/PerMain.vue';
import ProductMain from '../components/ProductMain.vue';
export default {
    components:[Navbar,ContentOne,AboutMain,ProductMain,PerMain,BlogMain,ReviewMain,ContactContentMain],

}
</script>