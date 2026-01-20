import EventDetails from '@/app/components/details/EventDetails'
import EventVenue from '@/app/components/details/EventVenue'
import HeroSection from '@/app/components/details/HeroSection'
import { getEventById } from '@/db/queries'

const DetailsPage = async ({ params }) => {

    const eventId = params.id;
    const event = await getEventById(eventId);

    return (
        <>
            <HeroSection event={event} />
            <section className='container'>
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails event={event} />
                    <EventVenue event={event} />
                </div>
            </section>
        </>
    )
}

export default DetailsPage