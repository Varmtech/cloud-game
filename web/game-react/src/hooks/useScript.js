import { useEffect } from 'react';
const useScript = url => {
    useEffect(() => {
        import(`../js/${url}`)
    }, [url]);
};

export default useScript;