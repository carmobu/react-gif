import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => { 

    const category = 'One Punch'

    test('should mostrar elk loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'cargando...') );
        expect( screen.getByText( category ) );
     })

     test('debe mostrar el loading inicialmente', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length).toBe(2);
        
     })

 })