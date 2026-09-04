import type { PaginatePageQuery } from '~~/types/app/paginate/paginate'
import type { LocationQueryRaw } from '#vue-router'

export function useRouteManipulation() {
  const router = useRouter()
  const route = useRoute()
  const defaultPage = 1

  // Make generic type `TPage` mandatory by assigning its default value to `never` as `query` is optional in page type definitions.
  // This way, we can ensure that the generic type is always provided when calling the function
  // Or we get the `Argument of type 'some type' is not assignable to parameter of type 'never'` error.
  // https://stackoverflow.com/questions/53109837/how-to-make-a-generic-type-argument-required-in-typescript
  async function updateQueryParamValue<TPage extends { query?: LocationQueryRaw } = never>(
    paramName: keyof NonNullable<TPage['query']>,
    paramValue: NonNullable<TPage['query']>[typeof paramName],
  ): Promise<void> {
    const newQuery = { ...route.query, [paramName]: paramValue }

    if (paramValue === '') {
      delete newQuery[paramName as string]
    }

    await router.replace({ path: route.path, query: newQuery })
  }

  async function setDefaultPage(): Promise<void> {
    await updateQueryParamValue<PaginatePageQuery>('page', defaultPage)
  }

  return { updateQueryParamValue, setDefaultPage, defaultPage }
}
