import React, { useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';

export const Game = ({ universeId }) => {
    // const memoizedUniverseIds = useMemo(() => [universeId], [universeId]);
    // const { data, loading, error } = useFetch(memoizedUniverseIds);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;
    // if (!data || data.length === 0) return <div>No data available.</div>;

    // const game = data[0];

    return (
        // <div className="game">
        //     <img alt="gameImage" src={game.thumbnailUrl || ''} />
        //     <p className="gameTitle">{game.name}</p>
        //     <p className="gameVisit">{game.visits}</p>
        // </div>


        <div className="game">
            <div className='gameImage'>
                <img alt="gameImage" src="https://wallpapers.com/images/hd/question-mark-pixel-art-o7bd7dg80zs5063q.jpg"/>
            </div>
            
            <div className='gameInfo'>
                <p className="gameTitle">Unknown game</p>
                <p className="gameVisit">1.6B+</p>
            </div>

        </div>
    );
};