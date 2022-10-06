<template>
    <div class="w-full h-screen bg-center bg-cover bg-about">
        <AboutHead/>
        <AboutContent/>
    </div>
</template>

<script>
import AboutContent from './AboutContent.vue';
import AboutHead from './AboutHead.vue';

export default {
    components:[AboutContent,AboutHead]
}
</script>