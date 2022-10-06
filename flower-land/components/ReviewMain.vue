<template>
    <div class="w-full h-screen bg-center bg-cover bg-review">
        <ReviewHead/>
        <ReviewContent/>
    </div>
</template>

<script>
import ReviewContent from './ReviewContent.vue';
import ReviewHead from './ReviewHead.vue';

    
export default {
    components:[ReviewHead,
    ReviewContent]
}
</script>