import { DEFAULT_PAGE } from '@/constants'
import { useQueryStates, parseAsInteger ,parseAsString } from 'nuqs'

export const useAgentFiltres =()=>{
    return useQueryStates({
        search:parseAsString.withDefault("").withOptions({clearOnDefault:true}),
         page:parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({clearOnDefault:true})
    })
}