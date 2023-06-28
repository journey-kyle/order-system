import React from 'react';
import '../output.css';
import background_pic from '../img/keycoffee1.jpg';
import opera from '../img/opera.mp4';
import {Link, Route, Routes} from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const TestPage = () => {

  return (
<div className='m-6'>
  {/* <div className="flex justify-center">
  <button className="bg-blue-200 hover:bg-yellow-300 text-purple-500 font-bold py-4 px-8 rounded-full shadow-2x">
    Button
  </button>
  <button className="px-8 py-4 bg-sky-400 hover:bg-sky-600 rounded-full shadow-2xl hover:text-yellow-600 font-bold active:bg-sky-800 focus:outline-none focus:ring focus:ring-yellow-500">
    Button2
  </button>
  </div>
  <input type="text" value={ID} disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    <fieldset>
  <legend>Published status</legend>

  <input id="draft" className="peer/draft" type="radio" name="status" checked />
  <label for="draft" className="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" className="peer/published" type="radio" name="status" />
  <label for="published" className="peer-checked/published:text-sky-500">Published</label>

  <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
<label className="block">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-300 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label> */}
<nav className="flex justify-center space-x-4">
  <button className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" onClick={()=>{
    
    alive();

  }}>Home</button>
  {/* <Link to = "/dashboard" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link> */}
  <Link to = "/team" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</Link>
  <Link to = "/projects" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</Link>
  <Link to = "/reports" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</Link>
  
</nav>

<div>
{/* <iframe className="w-full aspect-video rounded-3xl" src={opera}></iframe> */}
  <button className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" onClick={()=>{
    
  }}>Logout</button>
</div>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9TZ8A1VZz_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
</div>
  );
}

export default TestPage;
