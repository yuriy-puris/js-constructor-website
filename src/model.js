import image from './assets/image.jpg';
import { TitleBlock, ColumnBlock, TextBlock, ImageBlock } from './classes/blocks';

export const model = [
    new TitleBlock(
        'JS. Websites constructor', 
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    ),
    new ImageBlock(
        image, 
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'banner'
        }
    ),
    new ColumnBlock(
        [
            'Pure app JS',
            'Solid architecture',
            'JS is awesome',
        ],
        {
            styles: {
                background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                color: '#fff',
                padding: '2rem',
                'font-weight': 'bold'
            }
        }
    ),
    new TextBlock(
        'some text',
        {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    )
];