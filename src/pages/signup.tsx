import InputTxt from "@/components/inputs/InputText"
import InputEmail from "@/components/inputs/InputEmail"
import InputPwd from "@/components/inputs/InputPwd"
import Checkbox from "@/components/checkbox/Checkbox"

const signup = () => {
  const changeChecked = (e: any) => {
    console.log(e.target.checked)
  }
  const getChecked = (val: boolean) => {
    console.log(val)
  }

  return (
    <div className='relative min-h-screen max-w-[640px] mx-auto bg-white pt-8'>
      <div className="py-4">
        <h1 className='text-4xl font-semibold text-center'>Sign Up</h1>
      </div>
      <div className="p-4">
        <InputTxt
          name="singup_name"
          placeholder="Name"
        >
        </InputTxt>
        <InputEmail
          name="signup_email"
          placeholder="Email"
          className="mt-5"
        >
        </InputEmail>
        <InputPwd
          name="signup_pwd"
          placeholder="Password"
          className="mt-5"
        >
        </InputPwd>
        <Checkbox
          name="signup_checkbox"
          text="I would like receive your newsletter and other promotional information"
          className="mt-7"
          onChange={getChecked}
        ></Checkbox>
      </div>
      <div className="absolute bottom-10 text-center w-full px-4">
        <div className="bg-primary rounded-full py-3 text-white text-semibold text-[16px]">
          <div className="flex w-full justify-center">
            <img src="/img/apple_icon.svg"/>&nbsp;
            <span>Continue with Apple</span>
          </div>
        </div>
        <span className="block bg-primary rounded-full py-3 text-white text-semibold text-[16px] mt-5">Sign Up</span>
        <div className="mt-2">
          <span className="text-primary text-semibold text-[16px]">Forgot your password?</span> 
        </div>
      </div>
    </div>
  )
}

export default signup