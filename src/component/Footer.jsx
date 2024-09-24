import React from 'react'
import {IoCallSharp} from "react-icons/io5";
import {MdPlace} from "react-icons/md";
import {TbMailPlus} from "react-icons/tb"
import FooterContact from '../api/FooterContact.json'

const Footer = () => {

    const iconMap = {
        MdPlace: <MdPlace/>,
        IoCallSharp : <IoCallSharp/>,
        TbMailPlus : <TbMailPlus/>
    }
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='grid grid-three-cols'>
          {
            FooterContact.map((curData) => {
                const {icons, title, Details} = curData;
                return (
                    <>
                        <div className='footer-contact'>
                            <div className='icon'>{iconMap[icons]}</div>
                            <div className='footer-contact-text'>
                                <p>{title}</p>
                                <p>{Details}</p>
                            </div>
                        </div>
                    </>
                )
            })
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer