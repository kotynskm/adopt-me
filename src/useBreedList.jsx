import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// run this anytime animal changes
export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // look for the results, if no results return empty list
  return [results?.data?.breeds ?? [], results.status];
}
