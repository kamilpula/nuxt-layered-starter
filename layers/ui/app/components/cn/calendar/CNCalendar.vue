<script lang="ts" setup>
import { CalendarRoot, type CalendarRootEmits, type CalendarRootProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    :class="cn('p-3', props.class)"
    v-bind="forwarded"
  >
    <CNCalendarHeader>
      <CNCalendarPrevButton />

      <CNCalendarHeading />

      <CNCalendarNextButton />
    </CNCalendarHeader>

    <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <CNCalendarGrid v-for="month in grid" :key="month.value.toString()">
        <CNCalendarGridHead>
          <CNCalendarGridRow>
            <CNCalendarHeadCell
              v-for="day in weekDays" :key="day"
            >
              {{ day }}
            </CNCalendarHeadCell>
          </CNCalendarGridRow>
        </CNCalendarGridHead>

        <CNCalendarGridBody>
          <CNCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full">
            <CNCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <CNCalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </CNCalendarCell>
          </CNCalendarGridRow>
        </CNCalendarGridBody>
      </CNCalendarGrid>
    </div>
  </CalendarRoot>
</template>
