import { bindActionCreators } from 'redux'
import Actions from '../store/actions'
import { useDispatch } from "react-redux";

export default function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(Actions, dispatch)
}