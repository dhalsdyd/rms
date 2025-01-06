import { useState, useEffect } from 'react';

function Router() {
    const [hasToken, setHasToken] = useState(false);
    const [didSplashScreenMount, setDidSplashScreenMount] = useState(false);


    const checkToken = () => {
        const token = localStorage.getItem('token');
        setHasToken(!!token);
    }

    useEffect(() => {
        checkToken();
    }, [hasToken]);

    useEffect(() => {
        const splashTimer = setTimeout(() => {
            setDidSplashScreenMount(true);
        }, 2000);

        return () => {
            clearTimeout(splashTimer);
        }
    }, []);

    const handleMainPage = (splashScreenState) => {
        if(!hasToken) {
            return <Loginpage />
        } else {
            return <MainPage />
        }

        return (
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        )
    }
}