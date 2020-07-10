import { FETCH_PROCESS_LOADING, FETCH_PROCESS_SUCSSES, FETCH_PROCESS_ERROR  } from './actionsType'

export function fetchProcess() {
  return async dispatch => {
    dispatch(fetchProcessLoading())
    
    // const processes = data => {
    //   return new Promise(function (resolve, regect) {
    //     const processList = data

    //     processList.onLoad = () => resolve(processList)
    //     processList.onError = () => regect(new Error('Ошибка загрузки данных'))
    //   })
    // }

    let processList = ({data: {loading, error, processList}}) => {
      if (loading) return console.log('loading')

      return new Promise((resolve, reject) => {
        const processes = processList
        const errorMessage = error

        processes.ok = () => resolve(processes)
        processes.er = () => reject(errorMessage)
      })
        .then(
          ok => console.log(result) 
        )
    }

    const data = processList

    console.log(data)


    dispatch(fetchProcessSucsses(data))

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