import React, { useEffect, useState } from 'react'
import { commerce } from '../../lib/commerce';

const Filter = ({updateFilter , products}) => {

    const[gender , setGender] = useState("All");
    // const[genderProduct , setGenderProduct] = useState([]);
    const[variants, setVariants] = useState("All");
    const[premium , setPremium] = useState(false)

    function handleGender(e){
        setGender(e.target.value);
    }

    function handleVariant(e){
        setVariants(e.target.value);
    }

    useEffect(() => {
        genderFuction(products)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gender, variants, premium])

    function genderFuction(products){
        if(premium){
            const prem = products.filter(function(product){
                const arr = product.categories.map((cat) => cat.name);
                return arr.includes("Premium")
            })
            if(gender === "All"){
                if(variants === "All"){
                    updateFilter(prem);
                }else{
                    const data = prem.filter(function(product){
                        const arr = product.categories.map((cat) => cat.name);
                        return arr.includes(variants)
                    })
                    updateFilter(data);
                }
            }else{
                let data = prem.filter(function(product){
                    const arr = product.categories.map((cat) => cat.name);
                    return arr.includes(gender)
                })
                if(variants === "All"){
                    updateFilter(data);
                }else{
                    let final = data.filter(function(product){
                        const arr = product.categories.map((cat) => cat.name);
                        return arr.includes(variants)
                    })
                    updateFilter(final);
                }
            }
        }else{
            if(gender === "All"){
                if(variants === "All"){
                    updateFilter(products);
                }else{
                    const data = products.filter(function(product){
                        const arr = product.categories.map((cat) => cat.name);
                        return arr.includes(variants)
                    })
                    updateFilter(data);
                }
            }else{
                let data = products.filter(function(product){
                    const arr = product.categories.map((cat) => cat.name);
                    return arr.includes(gender)
                })
                if(variants === "All"){
                    updateFilter(data);
                }else{
                    let final = data.filter(function(product){
                        const arr = product.categories.map((cat) => cat.name);
                        return arr.includes(variants)
                    })
                    updateFilter(final);
                }
            }
        }
        
    }

    const handleDescSort = async () => {
        const {data} = await commerce.products.list({
            sortBy: 'price',
            sortDirection: 'desc',
          });
          genderFuction(data)
    }
    const handleAsceSort = async () => {
        const {data} = await commerce.products.list({
            sortBy: 'price',
            sortDirection: 'asc',
          });
          genderFuction(data)
    }

    function handlePremium(){
        setPremium(!premium)
    }

  return (
    <div className='filter-section'>
        <div className='filter-area'>
            <div className='premium' onClick={handlePremium} style={{backgroundColor:   premium ? "#FFD369" : null }}>Premium Collection</div>
            <span>Gender :</span>
            <select onChange={handleGender} value={gender}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <span>Variants :</span>
            <select onChange={handleVariant} value={variants}>
                <option value="All">All</option>
                <option value="Metal Strap">Metal Strap</option>
                <option value="Leather Strap">Leather Strap</option>
                <option value="Smart Watch">Smart Watch</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Couple Watches">Couple Watches</option>
            </select>
            <button onClick={handleAsceSort}>sort: low to high</button>
            <button onClick={handleDescSort}>sort: high to low</button>
        </div>
        
    </div>
  )
}

export default Filter