import {Link} from 'react-router-dom';
import { Button, TextInput } from 'flowbite-react';


export default function signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <Link
              to="/" className="font-bold dark:text-white">
              <span className="px-2 py-1 bg-pink-500 rounded-lg text-white text-4xl">Kenyan's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project of a blog website with CRUD functionality</p>
        </div>
        <div className="flex-1">
        <form className='flex flex-col gap-4'>
          <div>
            <label htmlFor='username'>Your username</label>
            <TextInput type='text' placeholder='username' id='username' />
          </div>
          <div>
            <label htmlFor='email'>Your email</label>
            <TextInput type='text' placeholder='example@email.com' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Your password</label>
            <TextInput type='text' placeholder='password' id='password' />
          </div>
          <Button className='mt-5 ' type='submit'>Sign up</Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/signin" className='text-blue-500'>Sign In</Link>
        </div>
      </div>
        </div>
      </div>
  )
}
