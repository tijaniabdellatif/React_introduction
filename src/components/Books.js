import React from 'react';
import {Card} from "./Card";
import { dataBook } from '../data/data';


export const Books = () => {

    return(
        <article className="flex flex-wrap -mx-1">


           {
               dataBook.map((book) => {
                    
                       return(
                           <Card key={book.id}  book={book} />
                       );
               })
           }

        </article>
    );
}