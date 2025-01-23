<script setup lang="ts">
import { NuxtLink } from '#components'
import { navigationMenuTriggerStyle } from '#ui/app/components/cn/navigationMenu'
import { PAGES } from '~~/constants/page/pages'

const { getTranslatedPage } = useLocaleNavigation()
const { loggedIn } = useUserSession()
const { handleLogout } = useAuthUser()

const { loginPage } = useNavigationMenuContent()

function useNavigationMenuContent() {
  const loginPage = getTranslatedPage(PAGES.login())

  return {
    loginPage,
  }
}
</script>

<template>
  <CNNavigationMenu>
    <CNNavigationMenuList>
      <template v-if="loggedIn">
        <CNNavigationMenuItem>
          <CNNavigationMenuLink :class="navigationMenuTriggerStyle()" @click="handleLogout">
            {{ $t('layout.default.header.navigationMenu.logout.label') }}
          </CNNavigationMenuLink>
        </CNNavigationMenuItem>
      </template>

      <CNNavigationMenuItem v-else>
        <CNNavigationMenuLink :as="NuxtLink" :to="loginPage.to" :class="navigationMenuTriggerStyle()">
          {{ loginPage.name }}
        </CNNavigationMenuLink>
      </CNNavigationMenuItem>
    </CNNavigationMenuList>
  </CNNavigationMenu>
</template>
