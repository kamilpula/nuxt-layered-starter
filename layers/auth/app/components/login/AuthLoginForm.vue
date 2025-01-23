<script setup lang="ts">
import type { z } from 'zod'
import { insertUserSchema } from '~~/db/schema'

type LoginSchema = z.infer<typeof insertUserSchema>

const validationSchema = toTypedSchema(insertUserSchema.pick({
  email: true,
  password: true,
}))

const { handleSubmit } = useForm({
  validationSchema,
})

const isLoading = ref(false)

const { toast } = useToast()
const { handleLoginSuccess } = useAuthUser()

async function sendLoginRequest(data: LoginSchema) {
  return $fetch('/api/auth/login', {
    method: 'POST',
    body: data,
  })
}

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true

  try {
    const response = await sendLoginRequest(values)

    if (response)
      await handleLoginSuccess()
  }
  catch (error: any) {
    toast({
      title: error.message,
      variant: 'destructive',
    })
  }

  isLoading.value = false
})
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <CNFormField v-slot="{ componentField }" name="email">
      <CNFormItem>
        <CNFormLabel>Email</CNFormLabel>

        <CNFormControl>
          <CNInput type="text" placeholder="john.doe@example.com" v-bind="componentField" />
        </CNFormControl>

        <CNFormMessage />
      </CNFormItem>
    </CNFormField>

    <CNFormField v-slot="{ componentField }" name="password">
      <CNFormItem>
        <CNFormLabel>Password</CNFormLabel>

        <CNFormControl>
          <CNInput type="password" placeholder="*********" v-bind="componentField" />
        </CNFormControl>

        <CNFormMessage />
      </CNFormItem>
    </CNFormField>

    <CNButton type="submit" :disabled="isLoading">
      Login
    </CNButton>
  </form>
</template>
