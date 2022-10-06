<template>
    <div class="w-full h-screen bg-center bg-cover bg-performance mt-80">
        <PerHead/>
        <PerContent/>
    </div>
</template>

<script>
import PerContent from './PerContent.vue';
import PerHead from './PerHead.vue';

    PerHead
    PerContent
export default {
    components:[PerHead,PerContent]
}
</script>