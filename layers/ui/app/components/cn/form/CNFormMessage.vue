<script lang="ts" setup>
const { name, formMessageId } = useFormField()
</script>

<template>
  <ErrorMessage
    :id="formMessageId"
    as="p"
    :name="toValue(name)"
    class="text-destructive text-[0.8rem] font-medium"
  />
</template>
