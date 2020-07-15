<template>
  <terms :content="privacy" />
</template>

<script>
import privacy from '@/components/privacy'
import terms from '@/components/terms'
export default {
  components: { terms },
  data() {
    return {
      privacy: privacy
    }
  }
}
</script>
