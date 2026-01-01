import { useState } from "react";

import { GifisList } from "./gifs/components/GifisList";
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSeachBar } from "./shared/components/CustomSeachBar"

import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";


export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);

    const [PreviousTerms, setPreviousTerms] = useState<string[]>([])

    const handleTermClicked = (term: string) => {
        console.log({ term });
    };

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (PreviousTerms.includes(query)) return;

        setPreviousTerms([query, ...PreviousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

    };

    return (
        <>
            {/*header */}
            <CustomHeader
                title="Buscador De Gifs"
                description="Descubre y Comparte El Gif Perfecto"
            />

            {/* Search */}
            <CustomSeachBar
                placeholder="Busca lo que Quieras"
                onQuery={handleSearch}
            />

            {/* Busquedas Previas */}
            {/* PreviousSearches */}
            <PreviousSearches
                searches={PreviousTerms}
                onLabelClick={(term: string) => handleTermClicked(term)}
            />

            {/*Gifs */}
            {/* GifisList : Props => gifs: Gif[] */}
            <GifisList gifs={gifs} />
        </>
    );
};
