import EventList from "@/app/components/landing/EventList";
import Header from "@/app/components/landing/Header";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <EventList />
    </section>
  );
}
