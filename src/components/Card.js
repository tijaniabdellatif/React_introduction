import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faShoppingCart, faHeart} from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { formatPrice } from '../utils/helpers';
const MySwal = withReactContent(Swal);



export const Card = (props) => {

    console.log(props);
    const{url,title,date,author,authorImg,price} = props.book;


    const ClickHandler = () => {

        MySwal.fire({

            title:'Are you sure ?',
            text:'You want to add this item',
            icon : 'warning',
            confirmButtonText : 'Yes, Add this item',
            showCancelButton:true,
            didOpen : () => {

                 Swal.getCancelButton().addEventListener('click',e=>{

                    MySwal.fire({
                      
                        position:'top-end',
                        icon:'warning',
                        title : 'item not added',
                        showConfirmButton:false,
                        timer:2000

                    });
                 })

            }
            


        }).then(() => {
                   
            return MySwal.fire({
             position : 'top-end',
             icon : 'success',
             title:'item added',
             showConfirmButton : false,
             timer:2000

            })

        });

    };

    return(

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">

<img src={url} className="block h-auto w-full" />

        </a>
        <header className="flex items-center justify-between p-2 md:p-4">

            <h1 className="text-lg">
                <a className="no-underline hover:underline" style={{color:'red'}}>{title}</a>
            </h1>
            <p className="text-gray-darker text-sm">
                {date}
            </p>
        </header>
        <footer className="flex items-center justify-between p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black">
                <img className="block rounded-full" src={authorImg} />
                <p className="ml-2 text-sm">
                    {author.toUpperCase()}
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
            <Font name={faHeart} />
            </span>
            </a>

            <a className="no-underline text-gray-darker hover:text-red-dark">
            <span>
                <Font name={faShoppingCart} />
            </span>
            </a>
            
        </footer>

        <div className="text-center my-7">

            <button className="bg-white hover:bg-gray-100 py-2 px-4 border-gray-400 rounded shadow" onClick={ClickHandler} >
             
             Add to Cart <span>
                 <Font name={faShoppingCart} />
             </span>

            </button>


        </div>
    </div>


    </div>
    );

}

const Font = (props) => {
return (
    <FontAwesomeIcon icon={props.name} />
);

}