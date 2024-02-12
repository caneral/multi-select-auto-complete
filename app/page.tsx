"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import { setSearchTerm } from "@/lib/redux/slices/searchSlice/searchSlice";
import { useGetCharactersMutation } from "@/lib/redux/services/rickAndMorty.api";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const [getCharacters, { isLoading, error }] = useGetCharactersMutation();

  const searchTerm = useAppSelector((state) => state.search.searchTerm);

  const onInputChange = (e: string) => {
    dispatch(setSearchTerm(e));
  };

  const loadOptions = async () => {
    return await getCharacters({ name: searchTerm })
      .unwrap()
      .then((response) => {
        const options = response.results.map((character: any) => ({
          value: character.id,
          title: character.name,
          subTitle: character.episode.length + " Episodes",
          image: character.image,
        }));
        return options;
      });
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-center mb-2">Multi Select Auto Complete</h1>
      <MultiSelect
        inputValue={searchTerm ?? ""}
        error={error}
        isLoading={isLoading}
        loadOptions={loadOptions}
        onInputChange={onInputChange}
      />
    </div>
  );
}
