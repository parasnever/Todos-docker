// import { useQuery } from "@tanstack/react-query"


export function TodoContainer() {


    //only for the setup of the query

    // const {data , isLoading, error} = useQuery<{message: string}>({
    //     queryKey : ['test'],
    //     queryFn: async () =>{  
    //         return new Promise((resolve)=>{
    //             setTimeout(() => {
    //                 resolve({message: "react query working"})
    //             }, 2000);
    //         })
    //     }
    // })
    // if(isLoading){
    //     return <p>Loading ....</p>
    // }
    // if(error){
    //     return <p>Something is wrong : </p>
    // }
  return (
    <div>
        TodoContainer : 
        {/* {data?.message} */}
        </div>
  )
}

