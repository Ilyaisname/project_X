import { FETCH_PROCESS_START, FETCH_PROCESS_SUCSSES, FETCH_PROCESS_ERROR } from "../actions/actionsType"

const initialState = {
  process: [
    {
      id: "4a09a9ae-33ae-469d-8c04-c42a576af6fc",
      name: 'Рассмотрение кредитной заявки',
      numberOfExecutions: '340 487',
      averageLeadTime: '10ч 36мин',
      averageActiveTime: '1ч 7мин (10,5%)',
      employeesInvolvedProcess: '120',
      numberOfScenarios: '129',
      start: '11 ноября 2017',
      end: '6 ноября 2018',
      loading: '10 января 2018'
    },

    {
      id: "b57e7d55-ffa7-4edd-908d-dfc8aa260f0f",
      name: "Рассмотрение кредитной заявки 831",
      numberOfExecutions: '864 100',
      averageLeadTime: '450018',
      averageActiveTime: 12321863,
      employeesInvolvedProcess: 145,
      numberOfScenarios: 442,
      start: 959184922,
      end: 1142339870,
      loading: 1172808191
    },

    {
      id: "c2066a8f-de4e-43db-9fea-bb19ca6a0f49",
      name: "Рассмотрение кредитной заявки 392",
      numberOfExecutions: '947 389',
      averageLeadTime: 32310677,
      averageActiveTime: 68673310,
      employeesInvolvedProcess: 109,
      numberOfScenarios: 396,
      start: 970374552,
      end: 1470323490,
      loading: 1462292063
    }
  ],
  loading: false,
  error: null
}

export default function processReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROCESS_START:
      return {
        ...state, loading: true
      }
      case FETCH_PROCESS_SUCSSES:
      return {
        ...state, loading: false, process: action.process
      }
      case FETCH_PROCESS_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    default:
      return state
  }
}