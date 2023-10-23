
//Services for Maincategory
export async function createMaincategoryApi(data){
    var response=await fetch("/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getMaincategoryApi(){
    var response=await fetch("/maincategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateMaincategoryApi(data){
    var response=await fetch("/maincategory/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteMaincategoryApi(data){
    var response=await fetch("/maincategory/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}

//Services for Subcategory
export async function createSubcategoryApi(data){
    var response=await fetch("/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getSubcategoryApi(){
    var response=await fetch("/subcategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateSubcategoryApi(data){
    var response=await fetch("/subcategory/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteSubcategoryApi(data){
    var response=await fetch("/subcategory/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Services for Brand
export async function createBrandApi(data){
    var response=await fetch("/brand",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getBrandApi(){
    var response=await fetch("/brand",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateBrandApi(data){
    var response=await fetch("/brand/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteBrandApi(data){
    var response=await fetch("/brand/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}

//Services for Product
export async function createProductApi(data){
    var response=await fetch("/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getProductApi(){
    var response=await fetch("/product",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateProductApi(data){
    var response=await fetch("/product/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteProductApi(data){
    var response=await fetch("/product/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}

//Services for User
export async function createUserApi(data){
    var response=await fetch("/user",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getUserApi(){
    var response=await fetch("/user",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateUserApi(data){
    var response=await fetch("/user/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteUserApi(data){
    var response=await fetch("/user/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Services for Cart
export async function createCartApi(data){
    var response=await fetch("/cart",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getCartApi(){
    var response=await fetch("/cart",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateCartApi(data){
    var response=await fetch("/cart/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteCartApi(data){
    var response=await fetch("/cart/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Services for Wishlist
export async function createWishlistApi(data){
    var response=await fetch("/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getWishlistApi(){
    var response=await fetch("/wishlist",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateWishlistApi(data){
    var response=await fetch("/wishlist/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteWishlistApi(data){
    var response=await fetch("/wishlist/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}



//Services for Checkouts
export async function createCheckoutApi(data){
    var response=await fetch("/checkout",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getCheckoutApi(){
    var response=await fetch("/checkout",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateCheckoutApi(data){
    var response=await fetch("/checkout/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteCheckoutApi(data){
    var response=await fetch("/checkout/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Services for Contact
export async function createContactApi(data){
    var response=await fetch("/contact",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getContactApi(){
    var response=await fetch("/contact",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateContactApi(data){
    var response=await fetch("/contact/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteContactApi(data){
    var response=await fetch("/contact/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Services for Newslatter
export async function createNewslatterApi(data){
    var response=await fetch("/newslatter",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getNewslatterApi(){
    var response=await fetch("/newslatter",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateNewslatterApi(data){
    var response=await fetch("/newslatter/" + data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteNewslatterApi(data){
    var response=await fetch("/newslatter/" +data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}

