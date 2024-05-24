import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe("Tests in hook useFetchGifs ", () => {
    test("should return the initial state", () => {
      const { result } = renderHook(() => useFetchGifs("X-men"));
      const { images, isLoading } = result.current;
  
      expect(images.length).toBe(0);
      expect(isLoading).toBeTruthy();
    });


     test('debe regresar el estado inicial', async() => {

        const { result } = renderHook( ()=> useFetchGifs('One Punch') )
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            
        )

        const { images, isLoading } = result.current;
        console.log(result);
        expect( images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();       

     });

 });