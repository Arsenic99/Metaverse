import { RegContainer } from "./RegContainer";
import { PartListContainer } from "./partListContainer";

const Participation = () => {
    return (
        <div className="flex justify-between gap-x-5 mt-[108px]">
            <RegContainer/>
            <PartListContainer/>
        </div>
    )
}
export default Participation;