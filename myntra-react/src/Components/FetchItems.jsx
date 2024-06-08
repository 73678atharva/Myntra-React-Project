import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(Store => Store.fetchStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const Controller = new AbortController();
        const signal = Controller.signal;

        dispatch(fetchStatusAction.markFetchingStarted());

        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(fetchStatusAction.markFetchDone());
                dispatch(fetchStatusAction.markFetchingFinished());
                dispatch(itemsActions.addIntialItems(items));
            }).catch((err)=>{console.log(err)})
        return () => {
            Controller.abort();
        }

    }, []);

    return (
        <>
        </>
    );
}
export default FetchItems