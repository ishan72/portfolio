function App() {
  const itemToShow = [{
    name : 'Education',
    route:''
  },
  {
    name:'Experience',
    route:''
  },
  {
    name:'Project',
    route:'',
  },
  {
    name:'Contact',
    route:''
  },
  {
    name:'Misc.',
    route:''
  }
]
  return (
    <div className = "bg-background w-full h-screen flex justify-center items-center">
      <div className='w-10/12 text-center'>
        <section className = "text-xl">I am Ishan. I am software developer with two years of experience, mainly in frontend development.<br></br> I am open to collabarate for any job related to software development.</section>
        <section className="mt-6 flex flex-row justify-center space-x-8">
          {itemToShow.map((item, index) => {
            return(
              <div className="border-2 border-black rounded-full w-24 h-24 relative" key={index}>
                <p className="text-center absolute inset-y-1/3 inset-x-2">{item.name}</p>
            </div>              
            )
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
