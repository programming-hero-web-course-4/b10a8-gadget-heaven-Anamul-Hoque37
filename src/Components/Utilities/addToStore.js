import { toast } from "react-toastify";


const getStoreCardList = () =>{
    const storedListStr = localStorage.getItem('card-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return [];
    }
}
const getStoreWishList = () =>{
    const storedListStr = localStorage.getItem('wish-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return [];
    }
}
const addToStoreCardList = (id) =>{
    const storedList = getStoreCardList();
    if(storedList.includes(id)){
        toast("This is already add")
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('card-list', storedListStr)
        toast('Successfully added')
    }
}
const addToStoreWishList = (id) =>{
    const storedList = getStoreWishList();
    if(storedList.includes(id)){
        toast("This is already add")
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
        toast('Successfully added')
    }
}

export { addToStoreCardList, addToStoreWishList, getStoreCardList, getStoreWishList };