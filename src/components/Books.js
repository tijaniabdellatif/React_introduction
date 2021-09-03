import React from 'react';
import { dataBook } from '../data/data';
import {Card} from './Card'



const Books = () => {


    return(<article className="flex flex-wrap -mx-1">

        
        {
             dataBook.map((book) => {
                  
               return(<h1>
                    <Card book={book} key={book.id} />
               </h1>)

             })
        }

    </article>)

}


export default Books;
