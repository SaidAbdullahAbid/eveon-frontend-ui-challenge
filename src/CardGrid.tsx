import React from 'react';
import { useTranslation } from 'react-i18next';


const cards = [
    {
        id: '0',
        author: 'Alejandro Escamilla',
        title: 'Card One',
        text: 'This is a brief description for card one.',
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/500/300',
    },
    {
        id: '1',
        author: 'Alejandro Escamilla',
        title: 'Card Two',
        text: 'This is a brief description for card two.',
        url: 'https://unsplash.com/photos/LNRyGwIJr5c',
        download_url: 'https://picsum.photos/id/1/500/300',
    },
    {
        id: '2',
        author: 'Alejandro Escamilla',
        title: 'Card Three',
        text: 'This is a brief description for card three.',
        url: 'https://unsplash.com/photos/N7XodRrbzS0',
        download_url: 'https://picsum.photos/id/2/500/300',
    },
    {
        id: '3',
        author: 'Alejandro Escamilla',
        title: 'Card Four',
        text: 'This is a brief description for card four.',
        url: 'https://unsplash.com/photos/Dl6jeyfihLk',
        download_url: 'https://picsum.photos/id/3/500/300',
    },
    {
        id: '4',
        author: 'Alejandro Escamilla',
        title: 'Card Five',
        text: 'This is a brief description for card five.',
        url: 'https://unsplash.com/photos/y83Je1OC6Wc',
        download_url: 'https://picsum.photos/id/4/500/300',
    },
    {
        id: '5',
        author: 'Alejandro Escamilla',
        title: 'Card Six',
        text: 'This is a brief description for card six.',
        url: 'https://unsplash.com/photos/LF8gK8-HGSg',
        download_url: 'https://picsum.photos/id/5/500/300',
    },
];

export default function CardGrid() {
    const { t } = useTranslation();
    return (
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 list-none p-0">
            {cards.map((card) => (
                <li key={card.id} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 transition-colors mx-auto max-w-xl">
                    <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block md:w-48 w-full h-60 md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg overflow-hidden"
                        tabIndex={0}
                    >
                        <img
                            src={card.download_url}
                            alt={card.title}
                            className="object-cover w-full h-full"
                            loading="lazy"
                            onError={e => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x300?text=No+Image';
                            }}
                        />
                    </a>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.text}</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-fit"
                            onClick={() => window.open(card.url, '_blank', 'noopener,noreferrer')}
                        >
                            {t('card.button')}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
