<template>
  <terms :content="service" />
</template>

<script>
import service from '@/components/serviceTerms'
import terms from '@/components/terms'
export default {
  components: { terms },
  data() {
    return {
      service: service
    }
  }
}
</script>
