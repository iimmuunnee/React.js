import React from 'react'
import {useSelector} from 'react-redux'
import SerachBox from './SearchBox';
import ContactItem from './ContactItem';
import { useState } from 'react';
import { useEffect } from 'react';

const ContactList = () => {

  const {contacts, keyword} = useSelector(state => state.contact)

  const [filter, setFilter] = useState([])

  console.log(contacts, keyword);

  useEffect(() => {
    if(keyword===''){
      setFilter(contacts)
    }
    else{
      let list = contacts.filter((item) => item.name.includes(keyword))
      setFilter(list)
    }
  }, [contacts, keyword])

  return (
    <div className='contact-list-box'>
        <SerachBox/>
        총 연락처:{filter.length}
        <hr></hr>
        {filter.map((item)=>(
            <ContactItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default ContactList