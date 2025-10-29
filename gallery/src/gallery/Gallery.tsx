import React, {useState} from "react";

type PhotoCard ={
    id: number,
    title:string,
    description:string,
    photo:string,
    fullphoto:string,
    tags?: string[];
}


export const Gallery = () =>{

    const[search, setSearch] = useState('');

    const [gallery, setGallery] = useState<PhotoCard[]>(
        [
            {
                id: 1,
                title: 'Горный рассвет',
                description: 'Тихое утро в Альпах с туманом над долиной.',
                photo: 'https://picsum.photos/300/200?random=1',
                fullphoto: 'https://picsum.photos/1200/800?random=1',
                tags: ['природа', 'горы', 'рассвет', 'туман']
            },
            {
                id: 2,
                title: 'Океанский закат',
                description: 'Золотые волны у побережья Калифорнии.',
                photo: 'https://picsum.photos/300/200?random=2',
                fullphoto: 'https://picsum.photos/1200/800?random=2',
                tags: ['океан', 'закат', 'пляж', 'вода']
            },
            {
                id: 3,
                title: 'Лесная тропа',
                description: 'Узкая тропинка сквозь осенний лес.',
                photo: 'https://picsum.photos/300/200?random=3',
                fullphoto: 'https://picsum.photos/1200/800?random=3',
                tags: ['лес', 'осень', 'тропа', 'природа']
            },
            {
                id: 4,
                title: 'Городские огни',
                description: 'Ночной вид на Токио с высоты птичьего полёта.',
                photo: 'https://picsum.photos/300/200?random=4',
                fullphoto: 'https://picsum.photos/1200/800?random=4',
                tags: ['город', 'ночь', 'огни', 'Япония']
            },
            {
                id: 5,
                title: 'Пустынный каньон',
                description: 'Красные скалы в национальном парке США.',
                photo: 'https://picsum.photos/300/200?random=5',
                fullphoto: 'https://picsum.photos/1200/800?random=5',
                tags: ['пустыня', 'каньон', 'скалы', 'США']
            },
            {
                id: 6,
                title: 'Цветущая сакура',
                description: 'Весенний парк в Киото под розовым цветением.',
                photo: 'https://picsum.photos/300/200?random=6',
                fullphoto: 'https://picsum.photos/1200/800?random=6',
                tags: ['цветы', 'сакура', 'весна', 'Япония']
            },
            {
                id: 7,
                title: 'Северное сияние',
                description: 'Зелёные волны над ледяным озером в Норвегии.',
                photo: 'https://picsum.photos/300/200?random=7',
                fullphoto: 'https://picsum.photos/1200/800?random=7',
                tags: ['северное сияние', 'ночь', 'Норвегия', 'природа']
            },
            {
                id: 8,
                title: 'Кофейная уютность',
                description: 'Чашка кофе на деревянном столе у окна.',
                photo: 'https://picsum.photos/300/200?random=8',
                fullphoto: 'https://picsum.photos/1200/800?random=8',
                tags: ['кофе', 'уют', 'интерьер', 'утро']
            }
        ]
    )
    
    const Tags = ['природа', 'горы', 'рассвет', 'туман','океан', 'закат', 'пляж', 'вода','лес', 'осень', 'тропа', 'природа', 'город', 'ночь', 'огни', 'Япония', 'пустыня', 'каньон', 'скалы', 'США', 'цветы', 'сакура', 'весна', 'северное сияние', 'ночь', 'Норвегия', 'кофе', 'уют', 'интерьер', 'утро']

    const filterTitleTags = gallery.filter(item => 
        !search.trim() ||
        item.title.toLowerCase().includes(search.toLocaleLowerCase())||
        Tags.some
    )
    }
    return(
        <div className="card_photo">
           <input type="text"  onClick={(e) => setSearch(e.target.value)} />
           <div className="photo_card">
            
           </div>
        </div>
    )
}