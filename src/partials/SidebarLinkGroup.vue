<template>
  <li
    class="pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r"
    :class="
      activeCondition &&
      'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
    "
  >
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["activeCondition"]);
const expanded = ref(props.activeCondition);

const handleClick = () => {
  expanded.value = !expanded.value;
};
</script>
