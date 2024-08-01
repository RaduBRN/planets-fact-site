import PlanetDetails from "@/components/PlanetDetails";

function page({ params }) {
  return <PlanetDetails name={params} />;
}

export default page;
