

const ApplicationID=process.env.REACT_APP_ApplicationID;
const SearchOnlyAPI=process.env.SearchOnlyAPI;

export default function HomePage(){

    function getNumber(a) {
        if(a>10){
            return alert('Greater then 10')
        }else{
            return alert('less then 10 or equal to 10')
        }
    
    }
   
console.log(ApplicationID);
   

    return(

        <div>
            {ApplicationID}
        </div>
    )
}