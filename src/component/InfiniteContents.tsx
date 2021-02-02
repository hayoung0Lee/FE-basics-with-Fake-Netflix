// import styled from "styled-components";
import ThumbnailList from './ThumbnailList';

interface contentParams {
    name: string;
    length: number;
}
interface contentsType {
    [Key: string]: contentParams;
}

const contents: contentsType = {
    1: {
        name: 'US TV Series',
        length: 10,
    },
    2: {
        name: 'Popular On Netflix',
        length: 10,
    },
    3: {
        name: 'Suspenseful International TV shows',
        length: 10,
    },
    4: {
        name: 'Made in Korea',
        length: 10,
    },
    5: {
        name: 'New Releases',
        length: 10,
    },
    6: {
        name: 'International TV Dramas',
        length: 10,
    },
    7: {
        name: 'Crime Docuseries',
        length: 10,
    },
    8: {
        name: 'Real Stories',
        length: 10,
    },
    9: {
        name: 'Award-Winning International TV Shows',
        length: 10,
    },
    10: {
        name: 'Critically Acclaimed Films',
        length: 10,
    },
    11: {
        name: 'International Police Detective TV Dramas',
        length: 10,
    },
    12: {
        name: 'Children & Family TV',
        length: 10,
    },
    13: {
        name: 'Youth TV Dramas',
        length: 10,
    },
    14: {
        name: 'Top Picks for',
        length: 10,
    },
    15: {
        name: 'Award-Winning TV dramas',
        length: 10,
    },
    16: {
        name: 'Documentaries',
        length: 10,
    },
    17: {
        name: 'Critically Acclaimed US TV shows',
        length: 10,
    },
    18: {
        name: 'International TV starring Women',
        length: 10,
    },
    19: {
        name: 'Supernatural TV Shows',
        length: 10,
    },
    20: {
        name: 'Award-Winning TV Shows',
        length: 10,
    },
    21: {
        name: 'US TV Shows',
        length: 10,
    },
    22: {
        name: 'Exciting TV Shows',
        length: 10,
    },
    23: {
        name: 'Ensemble TV Shows',
        length: 10,
    },
    24: {
        name: 'Korean TV Shows',
        length: 10,
    },
    25: {
        name: 'Provacative Interntional TV Shows',
        length: 10,
    },
    26: {
        name: 'Emmy-winning International TV Shows',
        length: 10,
    },
    27: {
        name: 'Children & Family Novies',
        length: 10,
    },
    28: {
        name: 'Suspenseful TV Shows',
        length: 10,
    },
    29: {
        name: 'TV Shows Based on Books',
        length: 10,
    },
    30: {
        name: 'British TV Shows',
        length: 10,
    },
    31: {
        name: 'TV Shows',
        length: 10,
    },
    32: {
        name: 'Bingeworthy International TV Shows',
        length: 10,
    },
    33: {
        name: 'Inifinte Scroll',
        length: 10,
    },
};

const getContents = () => {
    let index = 0;
    return () => {
        index += 1;
        if (index > 32) {
            index = 33;
        }
        return contents[index];
    };
};
const InfiniteContents: React.FC<{ listCount: number }> = ({ listCount }) => {
    const contentsGenerator = getContents();
    console.log('listcount', listCount);
    return (
        <>
            {Array(listCount)
                .fill('con')
                .map((_i, index) => {
                    const data = contentsGenerator();
                    console.log('data', data);
                    return <ThumbnailList key={index} name={data['name']} length={data['length']} loadImgCount={6} />;
                })}
        </>
    );
};

export default InfiniteContents;
