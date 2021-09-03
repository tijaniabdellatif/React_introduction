import React from "react";

export const  Card = (props) => {


    const {title,date,price,author,authorImg,urlImg} = props.book;
    

    function clickHandler()
    {
        alert('Clickd');
    }


    return( 
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">

           <img src={urlImg} className="block h-auto w-full" />

        </a>
        <header className="flex items-center justify-between p-2 md:p-4">

            <h1 className="text-lg">
                <a className="no-underline hover:underline">{title}</a>
            </h1>
            <p className="text-gray-darker text-sm">
               {date}
            </p>
        </header>
        <footer className="flex items-center justify-between p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black">
                <img className="block rounded-full" src={authorImg} />
                <p className="ml-2 text-sm">
                    {author}
                </p>


                <p className="ml-2 text-sm">
                    Price : <span className="text-red-800"
                      style={{margin:'0.75rem',marginTop:"0.25rem"}}
                    >
                        {price}
                    </span>
                </p>
            </a>

            <a className="no-underline text-gray-darker hover:text-red-dark">
            <span>
            
            </span>
            </a>

            <a className="no-underline text-gray-darker hover:text-red-dark">
            <span>
              
            </span>
            </a>
            
        </footer>

        <div className="text-center my-7">

            <button className="bg-white hover:bg-gray-100 py-2 px-4 border-gray-400 rounded shadow" onClick={clickHandler}>
             
             Add to Cart 
             <span>

                 {/* ICON  
                   Icon sous format d'un composant qui accept des props
                 */}
                 
             </span>

            </button>


        </div>
    </div>


    </div>)
}