export const UseLocalstorage = (key, Data) => {

    const data= JSON.parse( localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(Data));

    switch (Data)

}