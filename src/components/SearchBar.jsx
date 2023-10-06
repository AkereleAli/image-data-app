import React from 'react'
import './searchbar.css'
import { useState, useEffect } from "react"
import { store } from '../utils/data'
import CardListData from './CardListData'


const SearchBar = () => {
    const [users, setUsers] = useState([])


    const filteredBox = (e) => {
        if (e.target.value === "") {
          setUsers(store)
          return
        }
        const data = e.target.value.toLowerCase()
        const _newUser = users.filter((item) => {
          return item.title.toLowerCase().includes(data)
        })
        setUsers(_newUser)
    }

    useEffect(() => {
        fetch("http://fakestoreapi.com/products/")
          .then((response) => response.json())
          .then((users) => {
            setUsers(users)
          })
      }, [])

      console.log(users)

    const handleShowAll = () => {
        
    }

    
    return (
        <>
            <div className='inputholder'>
                <div>
                    <input type="text" className='inputbox' placeholder='search here'  onChange={filteredBox}/>
                </div>
                <div className='btnholder'>
                    <button className='btn' >Search</button>
                    <button className='btn' onClick={handleShowAll}>Show All</button>
                </div>
            </div>

            <div>
                <CardListData store={users}/>
            </div>
        </>
    )
}

export default SearchBar