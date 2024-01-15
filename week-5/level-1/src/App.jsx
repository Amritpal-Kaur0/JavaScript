import Card from "./components/Card"

const data=[
  {
    "id":1,
    "name": "Amrit",
    "description":"Intern/Fresher Looking for job",
    "Interests":["Coding","Reading","Gaming"],
    "SocialLinks":{
      "LinkedIn":"www.linkedin.com/in/amritpal-kaur-a3478a121",
      "Github":"https://github.com/Amritpal-kaur0"
    }
  },
  {
    "id":2,
    "name": "Amrit",
    "description":"Intern/Fresher Looking for full-time job",
    "Interests":["Coding","Reading","Gaming"],
    "SocialLinks":{
      "LinkedIn":"https://linkedin.com/",
      "Github":"https://github.com/Amritpal-kaur0"
    }
  }
]

function App() {
 
  return (
    <>
      <Card data={data}/>
    </>
  )
}

export default App
