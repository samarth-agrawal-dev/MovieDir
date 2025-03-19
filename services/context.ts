import { createContext, useState } from "react";
const moviesContext = createContext<{movies : Movie[] | any | undefined,moviesLoading : boolean,moviesError : Error | null}>({movies:null,moviesLoading:true,moviesError:null});
export default moviesContext;