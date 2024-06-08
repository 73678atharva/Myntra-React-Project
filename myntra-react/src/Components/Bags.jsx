import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {

    const bag = useSelector(store => store.bag);
    const items = useSelector(Store => Store.items);

    const finalItems = items.filter(item =>{
        const itemIndex = bag.indexOf(item.id);
        return itemIndex >= 0;
    });
    return (
        <>
            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItems.map(item => <BagItem key={item.id} item={item} />)}
                </div>
                <div className="bag-summary">
                    <BagSummary />
                </div>
            </div>
        </>
    );
}
export default Bag