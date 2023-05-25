import ContactezHeader from "./ContactezHeader";
import Location from "./Location";

export default function Contactez(){

    return(
        <div className="flex flex-col gap-6 tablet:gap-10 z-10 tablet:pt-8">
            <ContactezHeader/>
            <Location/>
        </div>
    )
}