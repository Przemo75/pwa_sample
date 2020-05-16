if ('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('sw.js') 
        .then((reg) => console.log('SERVICE WORKER ZAREJESTROWANY!', reg)) 
        .catch((err) => console.log('SERVICE WORKER - BŁĄD PODCZAS REJESTRACJI!', err)); }
