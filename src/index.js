//EN Javascript (ES6)
import React from 'react';
import  ReactDOM  from 'react-dom';
import  Books  from './components/Books';
import './index.css';


const Heading = (props) => {
  

    return(<h1 className="font-mono text-3xl text-center text-red-800">
       {props.title}
            
    </h1>);
}



function BookList()
{

     return(
      
         <>
                <section className="container mx-auto my-12 px-4">

                      <Heading title="BookList" />
                      <Books />

                </section>
         </>

     );
}


ReactDOM.render(<BookList />,document.getElementById('root'));