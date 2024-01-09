import React from 'react'
import '../css/Card.css'
import start_fill from '../assets/Star_fill.svg'
import start from '../assets/Star.svg'
export default function Card({ data }) {
    return (
        <>
        {
            data.map((item,index)=>(
            <div key={index} className='card'>
                <img src={item.image} alt="image" />
                {item.popular === true ? <p className='popular'> Popular </p> : ''}
                <div className="title_and_price">
                    <h2> {item.name} </h2>
                    <p> {item.price} </p>
                    {console.log(item.name)}
                </div>
                <div className="reviews">
                    <div className="rating">
                        {item.votes>0?
                        <>
                        <img src={start_fill} style={{ width: '20px', height: '20px' }} />
                        <span style={{ color: '#FEF7EE', fontWeight: '600' }}> {item.rating} </span> 
                        <span style={{ color: '#6F757C', fontWeight: '600' }}> {`(${item.votes} votes)`} </span>
                        </>
                        :
                        <>
                        <img src={start} style={{ width: '20px', height: '20px' }} />
                        <span style={{ color: '#FEF7EE', fontWeight: '600' }}> </span> 
                        <span style={{ color: '#6F757C', fontWeight: '600' }}> No rating </span>
                        </>
                        }
                        
                    </div>
                    <div>
                        {
                            item.available===false?<p className="available" style={{color:'#ED735D',fontSize:'12px'}}>Sold out</p>:''
                        }
                    </div>
                </div>
            </div>
            ))
            }
           
        </>
    )
}
