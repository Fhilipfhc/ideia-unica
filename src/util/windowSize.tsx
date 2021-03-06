import React, {useState, useEffect} from 'react'


function App(){
    const size = useWindowSize();
    return(
        <div>
            {size.width}px / {size.height}px
        </div>
    );
}

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState({ 
        width: undefined,
        height: undefined,
    }); 
    useEffect(() => {
        if(typeof window !== undefined){
            function handleResize(){
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                }); 
            }
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize)
        }

    }, []);
    return windowSize;
}
