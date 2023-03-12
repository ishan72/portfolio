import './App.css';
import Home from './components/home';
import {AiFillFilePdf} from 'react-icons/ai';
import Resume from './assets/Resume.pdf';


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
    // <div className = "bg-background w-full h-screen flex justify-center items-center">
    //   <div className='w-10/12 text-center'>
    //     <section className = "text-xl">I am Ishan. I am software developer with two years of experience, mainly in frontend development.<br></br> I am open to collabarate for any job related to software development.</section>
    //     <section className="mt-6 flex flex-row justify-center space-x-8">
    //       {itemToShow.map((item, index) => {
    //         return(
    //           <div className="border-2 border-black rounded-full w-24 h-24 relative" key={index}>
    //             <p className="text-center absolute inset-y-1/3 inset-x-2">{item.name}</p>
    //         </div>              
    //         )
    //       })}
    //     </section>
    //   </div>
    // </div>
    <div className='w-full h-screen relative'>
      <Home/>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
        <div className='font-arapey'>
        <p className='text-4xl'>Hello!!</p>
        <p className='text-3xl'>It's me Ishan.</p>
        <p className='text-2xl'>I am software developer,<br/>specializing in frontend development.</p>
        </div>
      <div className='mt-4 flex flex-col space-y-4'>
        <button type='button' className='btn rounded-full bg-blue-500 px-2 py-2 hover:bg-sky-700'>
        <a href={Resume} className='w-full' download="Ishan's Resume" target="_blank">
          <div className='flex  items-center justify-center'>
            <AiFillFilePdf size="1em"/>
            <p className='ml-2'>Download CV</p>
          </div>
        </a>
        </button>
        <button className='btn rounded-full bg-blue-500 py-2 hover:bg-sky-700'>View Content</button>
      </div>
      </div>
    </div>
  );
}

export default App;
