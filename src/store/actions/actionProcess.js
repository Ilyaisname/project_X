import { FETCH_PROCESS_START, FETCH_PROCESS_SUCSSES, FETCH_PROCESS_ERROR  } from './actionsType'

export function fetchProcess() {
  return dispatch => {
    dispatch(fetchProcessStart())

    const process = []

    dispatch(fetchProcessSucsses(process))

    dispatch(fetchProcessError())
  }
}

export function fetchProcessStart() {
  return {
    type: FETCH_PROCESS_START
  }
}

export function fetchProcessSucsses(process) {
  return {
    type: FETCH_PROCESS_START,
    process
  }
}

export function fetchProcessError() {
  return {
    type: FETCH_PROCESS_START,
    error: null
  }
}