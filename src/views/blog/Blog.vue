<template>
  <md-editor v-model="text" />
</template>

<script lang="ts">
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { MdEditor },
  data() {
    return {
      text: '',
    };
  },
});
</script>
