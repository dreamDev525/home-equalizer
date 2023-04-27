import InputEmail from "../components/inputs/InputEmail";
import InputPwd from "../components/inputs/InputPwd";
import { useRouter } from "next/router";

const login = () => {
  let t_email = ""
  let t_pwd = ""
  
  const router = useRouter()
  
  const handleLogin = () => {
    console.log('login success')
    console.log(t_email, t_pwd)
    router.push('/signup')
  }

  const getEmail = (val: string) => {
    t_email = val
  }

  const getPwd = (val: string) => {
    t_pwd = val
  }

  return (
    <div className="relative min-h-screen max-w-[640px] mx-auto bg-white pt-12">
      <div className="py-4">
        <h1 className='text-4xl font-semibold text-center'>Log In</h1>
      </div>
      <div className="p-4">
        <InputEmail
          name="login_email"
          placeholder="Email"
          onChange={(event) => {getEmail(event.target.value)}}
        >
        </InputEmail>
        <InputPwd
          name="login_pwd"
          placeholder="Password"
          className="mt-5"
          onChange={(event) => {getPwd(event.target.value)}}
        >
        </InputPwd>
      </div>
      <div className="absolute bottom-10 text-center w-full px-4">
        <span className="block bg-primary rounded-full py-3 text-white text-semibold text-[16px]" onClick={handleLogin}>Log In</span>
        <div className="mt-2">
          <span className="text-primary text-semibold text-[16px]">Forgot your password?</span>
        </div>
      </div>
    </div>
  )
}

export default login