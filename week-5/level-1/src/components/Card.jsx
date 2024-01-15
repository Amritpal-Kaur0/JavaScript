

export default function Card({data}) {
  return (
    <div>
    {data.map((item)=>{
        return ( 
        <div className=" bg-gray-200 border-2 border-black w-1/2 text-center m-4 p-5" key={item.id}>
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="m-4">{item.description}</p>
            <h1 className="text-xl font-bold">Interest:</h1>
            <ul className="">
              {item.Interests.map((interest)=>{
                return <li key={interest}>{interest}</li>
              })}
            </ul>
            {Object.keys(item.SocialLinks).map((key)=>{
                return( 
                  <button className="bg-green-500 p-3 m-4 rounded text-white" key={key}>
                 <a  href={item.SocialLinks[key]}>{key}</a>
                  </button>
                )
            })}
        </div>
        )
    })}
    </div>
  )
}
