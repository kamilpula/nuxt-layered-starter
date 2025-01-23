<script setup>
const props = defineProps({
  date: {
    type: Date,
    default: () => new Date(new Date().setHours(0, 0, 0, 0)),
  },
  withSeconds: {
    type: Boolean,
    default: false,
  },
  withPeriod: {
    type: Boolean,
    default: false,
  },
  withLabels: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:date'])

const internalDate = computed({
  get: () => props.date,
  set: value => emit('update:date', value),
})

const period = ref('PM')
const hourRef = ref(null)
const minuteRef = ref(null)
const secondRef = ref(null)
const periodRef = ref(null)

const focusMinuteRef = () => minuteRef.value?.$el.focus()
const focusHourRef = () => hourRef.value?.$el.focus()
const focusSecondRef = () => secondRef.value?.$el.focus()
const focusPeriodRef = () => periodRef.value?.$el.focus()

function focusLeftConditional() {
  if (props.withSeconds) {
    focusSecondRef()
  }
  else {
    focusMinuteRef()
  }
}
function focusRightConditional() {
  if (props.withSeconds) {
    focusSecondRef()
  }
  else {
    focusPeriodRef()
  }
}

function updateDate(newDate) {
  internalDate.value = newDate
}
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex flex-col items-center gap-1">
      <CNLabel v-if="withLabels" for="hours" class="text-xs">
        Hours
      </CNLabel>

      <CNTimePickerInput
        ref="hourRef"
        :picker="withPeriod ? '12hours' : 'hours'"
        :period
        :date="internalDate"
        @right-focus="focusMinuteRef"
        @update:date="updateDate"
      />
    </div>

    <div v-if="!withLabels">
      :
    </div>

    <div class="flex flex-col items-center gap-1">
      <CNLabel v-if="withLabels" for="minutes" class="text-xs">
        Minutes
      </CNLabel>

      <CNTimePickerInput
        ref="minuteRef"
        picker="minutes"
        :date="internalDate"
        @left-focus="focusHourRef"
        @right-focus="focusRightConditional"
        @update:date="updateDate"
      />
    </div>

    <div v-if="!withLabels && withSeconds">
      :
    </div>

    <div v-if="withSeconds" class="flex flex-col items-center gap-1">
      <CNLabel v-if="withLabels" for="seconds" class="text-xs">
        Seconds
      </CNLabel>

      <CNTimePickerInput
        ref="secondRef"
        picker="seconds"
        :date="internalDate"
        @left-focus="focusMinuteRef"
        @right-focus="focusPeriodRef"
        @update:date="updateDate"
      />
    </div>

    <CNSelect v-if="withPeriod" v-model="period" class="w-20">
      <CNSelectTrigger ref="periodRef" @keydown.arrow-left="focusLeftConditional">
        <CNSelectValue />
      </CNSelectTrigger>

      <CNSelectContent>
        <CNSelectGroup>
          <CNSelectItem value="PM">
            PM
          </CNSelectItem>

          <CNSelectItem value="AM">
            AM
          </CNSelectItem>
        </CNSelectGroup>
      </CNSelectContent>
    </CNSelect>
  </div>
</template>
