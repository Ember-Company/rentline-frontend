<script setup lang="ts" generic="ColumnType">
import type { Column } from "@tanstack/vue-table";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "../../lib/utils";

interface DataTableColumnHeaderProps<TColumnType> {
  column: Column<TColumnType, any>;
  title: string;
}

defineProps<DataTableColumnHeaderProps<ColumnType>>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div
    v-if="column.getCanSort()"
    :class="cn('flex items-center space-x-2', $attrs.class ?? '')"
  >
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{{ title }}</span>
          <Icon
            icon="radix-icons:arrow-down"
            v-if="column.getIsSorted() === 'desc'"
            class="lg:ml-2 h-4 w-4"
          />
          <Icon
            icon="radix-icons:arrow-up"
            v-else-if="column.getIsSorted() === 'asc'"
            class="lg:ml-2 h-4 w-4"
          />

          <Icon v-else icon="radix-icons:caret-sort" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <Icon
            icon="radix-icons:arrow-up"
            class="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
          />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <Icon
            icon="radix-icons:arrow-down"
            class="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
          />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleVisibility(false)">
          <Icon
            icon="radix-icons:eye-none"
            class="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
          />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div v-else :class="$attrs.class" class="text-xs lg:text-sm">
    {{ title }}
  </div>
</template>
