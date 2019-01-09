export const SEND_TXT = 'SEND_TXT'

export const initialState = {
  txt: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_TXT:
      return Object.assign({}, state, { PageState: { txt: action.payload.txt } })
    default:
      return state
  }
}

export const sendText = (txt) => {
  return async (dispatch) => {
    const res = await sendTxtApi(txt)
    dispatch({
      type: SEND_TXT,
      payload: {
        txt: res.retrievedTxt
      }
    })
  }
}

const sendTxtApi = async (txt) => {
  let result = { retrievedTxt: '' }
  if (txt) {
    // sending text as param (same text will be received after the call)
    const res = await fetch('/api/getText?txt=' + txt)
      .catch(e => result = { retrievedTxt: e.message })
    
    const body = await res.json()
    
    if (res.status != 200) {
      result = { retrievedTxt: body.errMsg }
    } else {
      // if no error then show text.
      result = { retrievedTxt: body.txt }
    }
  }

  return result
}