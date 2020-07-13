import { FETCH_PROCESS_LOADING, FETCH_PROCESS_SUCSSES, FETCH_PROCESS_ERROR  } from './actionsType'
import { processList } from '../../queries/queries'

export function fetchProcess(params) {
  return async dispatch => {
    dispatch(fetchProcessLoading())
    
    const data = params.data 
    
     if (data.loading && data.processList === undefined)  {
          dispatch(fetchProcessLoading())
      } else {
          dispatch(fetchProcessSucsses(processList))
      }
  

    dispatch(fetchProcessError())
  }
}

export function fetchProcessLoading() {
  return {
    type: FETCH_PROCESS_LOADING
  }
}

export function fetchProcessSucsses(process) {
  return {
    type: FETCH_PROCESS_SUCSSES,
    process
  }
}

export function fetchProcessError(error) {
  return {
    type: FETCH_PROCESS_ERROR,
    error
  }
}