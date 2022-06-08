export const createNewDate =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dateCreate = new Date().toLocaleDateString()
            resolve(dateCreate)
        }, 2000)
    })
   
}